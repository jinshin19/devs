import mysql from 'mysql2/promise';

const pool = mysql.createPool(
    {
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0
    }
);

export const performDatabaseConnection = async () => {

    try {
        
        const connection = await pool.getConnection();
        const [ rows, fields ] = await connection.query('');
        connection.release();
        return rows;

    } catch (error) {

        if ( error ) {

            console.log("Error", error);
            
        }
    }

}