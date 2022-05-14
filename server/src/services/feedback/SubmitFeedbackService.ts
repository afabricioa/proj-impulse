import { IFeedbacksRepository } from "../../repositories/IFeedbacksRepository";
import { FeedbacksRepository } from "../../repositories/implementations/FeedbacksRepository";

interface IRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService{
    constructor(private feedbacksRepository: IFeedbacksRepository){}
    
    async execute({type, comment, screenshot}: IRequest): Promise<void> {
        //sem usar inversão de dependencia
        // const feedbacksRepository = new FeedbacksRepository();
        // await feedbacksRepository.create({
        //     type, comment, screenshot
        // });
        await this.feedbacksRepository.create({type, comment, screenshot})
    }
}