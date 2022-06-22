import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class OrderDB extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    status: string | undefined;

    constructor() {
        super();
    }

    getStatus() {
        return this.status;
    }
}
