import { getRepository, Repository } from "typeorm";
import { Feedback } from "../../project/domain/Feedback";
import { IFeedbackDTO, IFeedbacksRepository } from "../IFeedbacksRepository";
import { AppDataSource } from "../../database/databaseConfig";

//implementa a interface
export class FeedbacksRepository implements IFeedbacksRepository{
    
    private repository: Repository<Feedback>;
    
    constructor() {
        this.repository = AppDataSource.getRepository(Feedback);
    }

    async create ({ type, comment, screenshot }: IFeedbackDTO): Promise<void> {
        const feedback = this.repository.create({
            type,
            comment,
            screenshot
        });

        try {
            await this.repository.save(feedback);        
        } catch (error) {
            console.log(error)
        }
    
    }
}