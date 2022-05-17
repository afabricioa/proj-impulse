import { FeedbacksRepository } from "../../repositories/implementations/FeedbacksRepository";
import { SubmitFeedbackService } from "../../services/feedback/SubmitFeedbackService";
import { NodeMailerMailUtil } from "../../utils/nodemailer/nodemailer-mail-util";
import { CreateFeedbackController } from "./CreateFeedbackController";

export default (): CreateFeedbackController => {

    const feedbacksRepository = new FeedbacksRepository();
    const nodeMailerUtil = new NodeMailerMailUtil();
    const submitFeedbackService = new SubmitFeedbackService(feedbacksRepository, nodeMailerUtil);
    const createFeedbackController = new CreateFeedbackController(submitFeedbackService);

    return createFeedbackController;
}