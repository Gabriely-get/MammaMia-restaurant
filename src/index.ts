import path from 'path';
import express from 'express';
import { router } from './routes';

const app = express();

app.use('/', router);

app.use(express.static(path.join(__dirname, "..", "public")));
app.set('views', 'public/views');
app.set('view engine', 'ejs');

export { app };