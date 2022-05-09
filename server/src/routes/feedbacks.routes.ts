import { Router } from "express";

const feedbackRoutes = Router();

// "/" é a principal
// "/nomemetodo" são rotas a partir da principal

feedbackRoutes.post("/", (req, res) => {
    return res.send("Helllo World")
});

feedbackRoutes.post("/teste", (req, res) => {
    return res.send("Helllo World 2")
});

export { feedbackRoutes };