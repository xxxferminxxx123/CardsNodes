import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { UserName } from '../domain/UserName';
import { UserEmail } from '../domain/UserEmail';
import { UserCreatedAt } from '../domain/UserCreatedAt';
import * as dotenv from 'dotenv';

dotenv.config();

export class SuperBaseUserRepository implements UserRepository {
  private client: SupabaseClient;

 constructor() {
    this.client = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!,
      {
        global: {
          headers: {
            'X-Custom-Header': 'FerminRulez',
            'Authorization': `Bearer ${process.env.SUPABASE_KEY!}`
          },
        },
      }
    );
  }

  async create(user: User): Promise<void> {
    const { error } = await this.client.from('users').insert([
      {
        id: user.id.value,
        name: user.name.value,
        email: user.email.value,
        created_at: user.createdAt.value
      }
    ]);

    if (error) throw error;
  }

  async getAll(): Promise<User[]> {
    const { data, error } = await this.client
      .from('users')
      .select('id,name,email,created_at');
    console.log(data)
    if (error) throw error;

    return (data || []).map((row) =>
      new User(
        new UserId(row.id),
        new UserName(row.name),
        new UserEmail(row.email),
        new UserCreatedAt(row.created_at)
      )
    );
  }

  async getOneById(id: UserId): Promise<User | null> {
    const { data, error } = await this.client
      .from('users')
      .select('*')
      .eq('id', id.value)
      .single();

    if (error?.message === 'No rows found') return null;
    if (error) throw error;

    return new User(
      new UserId(data.id),
      new UserName(data.name),
      new UserEmail(data.email),
      new UserCreatedAt(data.created_at)
    );
  }

  async edit(user: User): Promise<void> {
    const { error } = await this.client
      .from('users')
      .update({
        name: user.name.value,
        email: user.email.value
      })
      .eq('id', user.id.value);

    if (error) throw error;
  }

  async delete(id: UserId): Promise<void> {
    const { error } = await this.client
      .from('users')
      .delete()
      .eq('id', id.value);

    if (error) throw error;
  }
}
