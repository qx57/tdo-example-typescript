import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({name: "orders"})
export class OrderDB extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({type: "varchar"})
    status: any;

    constructor() {
        super();
    }
}
