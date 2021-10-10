import express, { Request, Response } from 'express';
import * as authController from '../controllers/authController';
import validations from '../utils/validations';
import { body } from 'express-validator';

const authRouter = express.Router();

authRouter.post('/verify',
  validations.isEmail,
  authController.checkUserRegistration
);

authRouter.get('/init',
  authController.checkSessionId,
  (req: Request, res: Response) => {
    console.log(res.locals.isAuthenticated)
    res.status(200).send(res.locals.isAuthenticated)
  }
);

authRouter.post('/register/:email', authController.registerUser);

authRouter.post('/login/:email', authController.loginUser);

export default authRouter;