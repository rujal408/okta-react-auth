import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { oktaAuthRequired } from './lib/oktaAuthRequired';

const app: Express = express();
const PORT = process.env.PORT || ('8000' as string);

app.use(cors());
app.use(bodyParser());
app.post('/api/login', (req: Request, res: Response) => {
  res.json({ acessToken: req.body.accessToken });
});

app.get('/api/locked', oktaAuthRequired, (req: Request, res: Response) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: 'I AM LEGEND',
      },
      {
        date: new Date(new Date().getTime() - 1000 * 60 * 60),
        text: 'BEEP BOOP BEEP BOOP!',
      },
    ],
  });
});

app.get('/api/free', (req: Request, res: Response) => {
  res.json({
    messages: [
      {
        date: new Date(),
        text: 'HAHAHAHAHA YOU THOT YOU COULD LOCK ME UP',
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`We LIVE at http://localhost:${PORT}`);
});
