// const { Client } = require('pg')

// function dbConnection() {
//   const client = new Client()
//   client.connect()
//   client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//     console.log(res.rows[0].message)
//     console.log('connected to DB') // Hello world!
//     client.end()
//   })
// };

// module.exports = dbConnection ;