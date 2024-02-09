import mysql, { QueryOptions } from 'mysql2/promise';
import { StatementTypes } from '../types/types';

export const performDatabaseConnection = async ( stmts: StatementTypes & QueryOptions, values: any ) => {

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

    try {
        
        const connection = await pool.getConnection();
        const [ rows, fields ] = await connection.query(stmts, values);
        connection.release();
        return rows;

    } catch (error) {

        if ( error ) {

            if ( error ) return {
                error
            }
            
        }
    }

}