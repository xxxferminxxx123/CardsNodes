import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { UserGetOneById } from "../../User/application/UserGetOneById/UserGetOneById";
import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";

export type UserServices = {
  getAll: UserGetAll;
  getOneById: UserGetOneById;
  create: UserCreate;
  edit: UserEdit;
  delete: UserDelete;
};
