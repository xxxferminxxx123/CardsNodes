import { SqlServerUserRepository } from "../../../User/infrastructure/SQL/SqlUserRepository";
import { UserCreate } from "../../../User/application/UserCreate/UserCreate";
import { UserDelete } from "../../../User/application/UserDelete/UserDelete";
import { UserEdit } from "../../../User/application/UserEdit/UserEdit";
import { UserGetAll } from "../../../User/application/UserGetAll/UserGetAll";
import { UserGetOneById } from "../../../User/application/UserGetOneById/UserGetOneById";
import { UserServices } from "src/lib/User/infrastructure/UserServices";

export const buildServiceContainer = async (): Promise<{ user: UserServices }> => {
  const userRepository = new SqlServerUserRepository();
  await userRepository.init();

  return {
    user: {
      getAll: new UserGetAll(userRepository),
      getOneById: new UserGetOneById(userRepository),
      create: new UserCreate(userRepository),
      edit: new UserEdit(userRepository),
      delete: new UserDelete(userRepository),
    },
  };
};
