import * as express from 'express';
import * as bodyParser from 'body-parser';

interface User {
  id: number;
  name: string;
}

const app = express();
app.use(bodyParser.json());