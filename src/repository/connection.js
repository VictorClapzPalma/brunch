import mysql2 from 'mysql2/promise';

const con = await mysql2.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PWD, 
    database: process.env.DB,
})

console.log('Conexão com o BD realizada com sucesso !!');

export {con}