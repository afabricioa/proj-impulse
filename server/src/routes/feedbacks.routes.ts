import { Router } from "express";
import createFeedbackController from "../useCases/Feedback";
const feedbackRoutes = Router();

// "/" é a principal
// "/nomemetodo" são rotas a partir da principal

feedbackRoutes.post("/", (req, res) => {
    console.log(req)
    return createFeedbackController().handle(req, res);
});

feedbackRoutes.post("/teste", (req, res) => {
    return res.send("Helllo World 2")
});

export { feedbackRoutes };