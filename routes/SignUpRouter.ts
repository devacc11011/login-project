import { Router } from 'express';
import { signUp } from '../controllers/SignContoller.js';
import { validateSignUp } from '../middleware/SignUpMiddleware.js';
import 'express-async-errors';

const signUpRouter = Router();

signUpRouter.post('/', validateSignUp, signUp);

export default signUpRouter;
