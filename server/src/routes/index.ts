import { Router } from "express";

import { feedbackRoutes } from "./feedbacks.routes";

const router = Router();

router.use("/feedbacks", feedbackRoutes);

export { router };