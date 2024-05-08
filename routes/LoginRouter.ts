import { Router } from 'express';
import { encryptPassword, validateLogin } from '../middleware/LoginMiddleware.js';
import { login } from '../controllers/LoginController.js';
import 'express-async-errors';

const loginRouter = Router();

loginRouter.post('/', validateLogin, encryptPassword, login);

export default loginRouter;
