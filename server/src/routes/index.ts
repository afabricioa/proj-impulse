import { Router } from "express";

import { feedbackRoutes } from "./feedbacks.routes";

const router = Router();

console.log("router");
router.use("/feedbacks", feedbackRoutes);

export { router };