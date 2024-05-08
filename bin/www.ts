import express from 'express';
import configure from '../config/EnvConfig.js';
import indexRouter from '../views/index.js';
import { authHandlError, commonHandleError } from '../middleware/ErrorHandler.js';
import ConfigValidatorImpl from '../config/configValidator/ConfigValidator.js';
import EnvValidator from '../config/configValidator/EnvValidator.js';
import DbValidator from '../config/configValidator/DbValidator.js';
import signUpRouter from '../routes/SignUpRouter.js';
import loginRouter from '../routes/LoginRouter.js';
import 'express-async-errors';

configure();

const validator = new ConfigValidatorImpl();
validator.add(new EnvValidator());
validator.add(new DbValidator());
validator.validate();

const PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/sign-up', signUpRouter);
app.use('/login', loginRouter);
app.use(authHandlError);
app.use(commonHandleError);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
