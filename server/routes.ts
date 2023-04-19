import Router from 'express';
import db from '../db/index.js';
const router = Router()

router.post('/register', db.controllers.register);

router.post('/parts', db.controllers.addPart);

router.post('/api/users', db.controllers.validateUser);

router.get('/api/products/:type', db.controllers.getProducts)

export default router