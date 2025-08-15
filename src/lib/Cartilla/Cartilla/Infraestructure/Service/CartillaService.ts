import { AppCartillaBuild } from "../../Application/CartillaBuild/AppCartillaBuild";
import { AppCartillaCreate } from "../../Application/CartillaCreate/AppCartillaCreate";

export type CartillaServices = {

    create: AppCartillaCreate;
    build: AppCartillaBuild;
    addColumnTable: AppCartillaBuild;
};