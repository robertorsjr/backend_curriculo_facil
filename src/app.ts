import express from 'express';
import * as bodyParser from 'body-parser';
import { PORT } from './config/config';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Node server started running');
});
