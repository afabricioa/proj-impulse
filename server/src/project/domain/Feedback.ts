import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("feedbacks")
export class Feedback{
    @PrimaryColumn()
    id?: string;

    @Column()
    type?: string;
    
    @Column()
    comment?: string;

    @Column({type: "clob"})
    screenshot?: Buffer;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}