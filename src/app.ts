import express from "express";
import { PORT } from './config/config'
import routes from './routes'
import * as bodyParser from "body-parser";

const app = express();

const aio = 'asd'

console.log(aio)

app.use(bodyParser.json());
app.use(routes)

app.listen(PORT, () => {
  console.log("Node server started running");
});