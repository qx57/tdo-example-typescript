import { DataSource } from "typeorm";
import { OrderDB } from "./tdo/db/OrderDB";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [OrderDB],
    synchronize: true,
    logging: false
})