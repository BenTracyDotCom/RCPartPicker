import Router from 'express';
import db from '../db';
const router = Router()

router.post('/register', db.controllers.register);

router.post('/parts', db.controllers.addPart);

export default router