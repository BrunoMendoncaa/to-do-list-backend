import cardRouter from './routes/CardRouter.js';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.use(cardRouter);
export default app;
//# sourceMappingURL=app.js.map