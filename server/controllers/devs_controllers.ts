import { Request, Response } from 'express';
import { performDatabaseConnection } from '../database/database';
import { hashPassword, compareHashedPassword } from '../utils/password_helper';

type DevSignupType = {
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    confirm_password: string;
}

export const createDev = async ( request: Request, response: Response ) => {

    const { username, firstname, lastname, password, confirm_password }: DevSignupType = request.body;

}