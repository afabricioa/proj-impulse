import { Request, Response } from "express";
import { SubmitFeedbackService } from "../../services/feedback/SubmitFeedbackService";

class CreateFeedbackController {
    constructor(private submitFeedbackService: SubmitFeedbackService){}

    handle(request: Request, response: Response): Response {
        const { type, comment, screenshot } = request.body;

        this.submitFeedbackService.execute({type, comment, screenshot})

        return response.status(201).send();
    }
}

export {CreateFeedbackController};