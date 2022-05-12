import { Router } from "express";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";
import { FeedbacksRepository } from "../repositories/implementations/FeedbacksRepository";
import { SubmitFeedbackService } from "../services/feedback/SubmitFeedbackService";

const feedbackRoutes = Router();

// "/" é a principal
// "/nomemetodo" são rotas a partir da principal

feedbackRoutes.post("/", (req, res) => {
    const { type, comment, screenshot } = req.body;
    
    const feedbacksRepository = new FeedbacksRepository();
    const submitFeedbackService = new SubmitFeedbackService(feedbacksRepository);
    
    // console.log(req.body)
    submitFeedbackService.execute({type, comment, screenshot});

    return res.status(201);
});

feedbackRoutes.post("/teste", (req, res) => {
    return res.send("Helllo World 2")
});

export { feedbackRoutes };