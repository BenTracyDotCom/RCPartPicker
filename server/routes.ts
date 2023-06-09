import Router from 'express';
import db from '../db/index.js';
const router = Router()

router.post('/register', db.controllers.register);

router.post('/parts', db.controllers.addPart);

router.post('/api/users', db.controllers.validateUser);

router.get('/api/products/:type', db.controllers.getProducts)

router.post('/api/builds', db.controllers.saveBuild)

router.delete('/api/builds', db.controllers.deleteBuild)
//TODO: protect this route

export default router