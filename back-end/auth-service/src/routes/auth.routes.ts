import { Router } from "express";
import login from "../controllers/auth.controllrs";

const router = Router();

router.post('/login', login);

export default router;
