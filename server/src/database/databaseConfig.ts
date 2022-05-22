import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "oracle",
    host: "localhost",
    username: "system",
    password: "ravtec",
    port: 1521,
    serviceName: "2fadbbf464c14a0c9c8d18febd989db3",
    connectString: "dev",
    synchronize: false, //auto create database toda vez que rodar aplicação, false em produção sempre.
    logging: false,
    entities: ["src/project/domain/**/*.ts"],
    migrations: ["src/database/migrations/**/*.ts"],
    subscribers: [],
})


//npm run typeorm migration:create src/database/migrations/CreateCategories - ok versão oracle
//npm run typeorm migration:run
//npm run typeorm migration:revert
//npx typeorm migration:create -n nomeMigration
//npx ts-node-dev ./node_modules/typeorm/cli migration:run -d ./src/da
//npx ts-node-dev ./node_modules/typeorm/cli migration:run -d ./src/database/databaseConfig - ok versao oracle