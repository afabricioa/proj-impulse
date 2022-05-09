import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Feedback{
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    type?: string;
    
    @Column()
    comment?: string;

    @Column()
    screenshot?: string;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}