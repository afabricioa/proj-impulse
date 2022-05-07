import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Feedback{
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    comment?: string;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}