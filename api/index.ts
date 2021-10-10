// tslint:disable: no-console
import express from 'express';
import connectToDb from './db';
import appRouters from './routes/index';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Express Session config
app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 6, // 6 days
  },
  store: new (require('connect-pg-simple')(session))({
    conString: process.env.DATABASE_URL,
  }),
}))

/* Initialize Database */
connectToDb();

/* Router */
app.use('/api', appRouters)

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))