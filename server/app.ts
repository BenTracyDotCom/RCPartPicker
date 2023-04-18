import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import router from './routes';

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use('/', router)


export default app;