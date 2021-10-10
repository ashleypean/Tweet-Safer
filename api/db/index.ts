import * as init from './sql/init';
import client from './client';

const connectToDb = () => {
  client.connect((err: Error) => {
    if (err) throw err;
    console.log('Database connected');
  });
}

export default connectToDb;