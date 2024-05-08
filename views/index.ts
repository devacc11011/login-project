import { Router } from 'express';
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.json({
    msg: 'OK',
  });
});

export default indexRouter;
