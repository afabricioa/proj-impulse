import { FeedbacksRepository } from "../../repositories/implementations/FeedbacksRepository";
import { SubmitFeedbackService } from "../../services/feedback/SubmitFeedbackService";
import { CreateFeedbackController } from "./CreateFeedbackController";

export default (): CreateFeedbackController => {

    const feedbacksRepository = new FeedbacksRepository();
    const submitFeedbackService = new SubmitFeedbackService(feedbacksRepository);
    const createFeedbackController = new CreateFeedbackController(submitFeedbackService);

    return createFeedbackController;
}