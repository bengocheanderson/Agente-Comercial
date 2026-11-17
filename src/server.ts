import 'dotenv/config';

import express from 'express';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
