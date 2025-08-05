import { SqlServerUserRepository } from "../../../User/infrastructure/SQL/SqlUserRepository";
import { UserCreate } from "../../../User/application/UserCreate/UserCreate";
import { UserDelete } from "../../../User/application/UserDelete/UserDelete";
import { UserEdit } from "../../../User/application/UserEdit/UserEdit";
import { UserGetAll } from "../../../User/application/UserGetAll/UserGetAll";
import { UserGetOneById } from "../../../User/application/UserGetOneById/UserGetOneById";
import { InMemoryUserRepository } from "../../../User/infrastructure/InMemoryUserRepository";
import { SuperBaseUserRepository } from "../../../User/infrastructure/SuperBaseUserRepository";

// const userRepository = new InMemoryUserRepository();
// const userRepository = new SuperBaseUserRepository();
const userRepository = new SqlServerUserRepository();

export const ServiceContainer = {
    user : {
         getAll         : new UserGetAll(userRepository)
        ,getOneById     : new UserGetOneById(userRepository)
        ,create         : new UserCreate(userRepository)
        ,edit           : new UserEdit(userRepository)
        ,delete         : new UserDelete(userRepository)
    },
};