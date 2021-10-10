import express from 'express';
import authRouter from "./authRouter";

const appRouters = express.Router();

appRouters.use('/auth', authRouter);

export default appRouters;