import express from "express";
import { PORT } from './app/config/config'
import routes from './app/routes'
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(routes)

app.listen(PORT, () => {
  console.log("Node server started running");
});