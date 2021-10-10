import { body } from 'express-validator';
import { Request, Response, NextFunction } from 'express';


const validations = {
  isEmail: body('email').isEmail(),
};

export default validations;