import { Router } from "express";
import authCadrasto from "../controllers/auth.controllrs.js";

const router = Router();

router.post('/login', authCadrasto);


export default router;
