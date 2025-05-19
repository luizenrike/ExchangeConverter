import express from 'express';
import { GetAll, GetUserById, Create, Update, Delete } from '../controllers/UserController';

const router = express.Router();

router.get('/users', GetAll);
router.get('/users/:id', GetUserById);
router.post('/users', Create);
router.put('/users/:id', Update);
router.delete('/users/:id', Delete);

export default router;