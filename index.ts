import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send({
  status: 'server ok'
}));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});