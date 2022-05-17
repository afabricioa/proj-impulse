import { IFeedbacksRepository } from "../../repositories/IFeedbacksRepository";
import { FeedbacksRepository } from "../../repositories/implementations/FeedbacksRepository";
import { MailUtil } from "../../utils/mail-util";

interface IRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService{
    constructor(
        private feedbacksRepository: IFeedbacksRepository,
        private mailUtil: MailUtil
    ){}
    
    async execute({type, comment, screenshot}: IRequest): Promise<void> {
        //sem usar inversão de dependencia
        // const feedbacksRepository = new FeedbacksRepository();
        // await feedbacksRepository.create({
        //     type, comment, screenshot
        // });
        await this.feedbacksRepository.create({type, comment, screenshot})

        await this.mailUtil.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo de Feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}