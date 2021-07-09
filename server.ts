import { app } from './src';
import { createServer } from 'http';

let port = 8000;
const http = createServer(app);

http.listen(port, () => console.log(`Listening on port: ${port}`));