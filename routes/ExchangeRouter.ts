import { getAllByExchange } from "../controllers/ExchangeController";
import express from "express";

const router = express.Router();

router.get('/exchange/:exchange', getAllByExchange);

export default router;