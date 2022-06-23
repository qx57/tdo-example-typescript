import { DataSource } from "typeorm";
import { OrderDB } from "./tdo/db/OrderDB";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 6543,
    username: "postgres",
    password: "pwd123",
    database: "test",
    entities: [OrderDB],
    synchronize: true,
    logging: false
});