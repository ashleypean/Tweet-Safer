
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import client from '../db/client';
import * as db from '../db/sql/auth';
import * as emailHelpers from '../utils/email';


export const loginUser = async (req: Request, res: Response) => {
  // console.log(req, res);
}

export const checkSessionId = async (req: Request, res: Response, next: NextFunction) => {
  if(req?.session) {
    res.locals.isAuthenticated = true;
  } else {
    res.locals.isAuthenticated = false;
  }
  next();
}

export const checkUserRegistration = async (req: Request, res: Response) => {
  try {
    // Email validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw errors.array();

    // Check if user exists in database
    const { email } = req.body;
    const user = await client.query(
      db.checkUserRegistration,
      [email]
    );

    // Send user registration/login email based on response from DB
    user.rows.length === 0
      ? await emailHelpers.sendRegistrationEmail(email)
      : await emailHelpers.sendLoginEmail(email);

    return res.status(200).json({msg: 'Email Sent'});

  } catch(err) {
    return res.status(400).json({errors: `Error: ${err.toString()}`});
  }
}

export const registerUser = async (req: Request, res: Response) => {

}
