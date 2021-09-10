// tslint:disable: no-console
import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';
import * as init from './db/sql/init';


dotenv.config();

const app = express();
const PORT = 3000;

/* Initialize Database */
const client = new Client({
    connectionString: process.env.DATABASE_URL,
})
client.connect((err) => {
    if (err) throw Error(`DATABASE CONNECTION ERROR: ${err}`);
    console.log('Connected to database')
})

client.query(
    init.createUserTable,
    (err, res) => {
    if(err) throw Error(`ERROR CREATING USERS TABLE: ${err}`)
    else console.log(`USERS TABLE CREATED: ${res}`)
})


client.query(
    init.createAccountTable,
    (err, res) => {
    if(err) throw Error(`ERROR CREATING ACCOUNTS TABLE: ${err.toString()}`)
    else console.log(`ACCOUNTS TABLE CREATED:`, res)
})

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))