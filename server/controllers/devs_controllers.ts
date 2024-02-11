import express, { Request, Response } from 'express';
import { performDatabaseConnection } from '../database/database';
import { hashPassword, compareHashedPassword } from '../utils/password_helper';
import { statements } from '../sql-statements/statments';
import { randomUUID } from 'crypto'

type DevDataType = {
    dev_id: string | number;
    username: string;
    firstname: string;
    middlename?: string,
    lastname: string;
    stacks?: string;
    links?: string;
    password?: string;
    confirm_password?: string;
}

export const getAllDevs = async ( request: Request, response: Response ) => {
    const result: any = await performDatabaseConnection(statements.getAllDevs, '');
    if ( result?.error ) return response.status(400).send({ message: "Failed to load the devs" })
    return response.status(200).send(result)
}

export const getDevByID = async ( request: Request, response: Response ) => {
    const { id } = request.params;
    const result: any = await performDatabaseConnection(statements.getDevsByID, [id]);
    if ( result.error ) return response.status(400).send( { message: "An error occurred" } )
    return response.status(200).send(result)
}

export const createDev = async ( request: Request, response: Response ) => {
    const dev_id = randomUUID();
    const { username, firstname, lastname, password, confirm_password }: DevDataType = request.body;
    const newValues: DevDataType | any = [ dev_id, username, firstname, '', lastname, '', '', password ]
    const result: any = await performDatabaseConnection(statements.createDev, [newValues]);
    if ( result?.error ) return response.status(400).send({ message: "Failed to signin" })
    return response.status(200).send({ message: "Signin successfully" })
}

export const updateDevByID = async ( request: Request, response: Response ) => {
    const { id } = request.params
    const { username, firstname, middlename, lastname, stacks, links, password }: DevDataType = request.body
    const newValues = [ username, firstname, middlename, lastname, stacks, links, password, id ]
    const result = await performDatabaseConnection(statements.updateDev, newValues)
}

export const deleteDevByID = async ( request: Request, response: Response ) => {
    const { id } = request.params;
    const result: any = await performDatabaseConnection(statements.deleteDev, [id])
    if ( result?.error ) return response.status(400).send( { message: "Failed to delete" } )
    return response.status(200).send( { message: "Deleted successfully" } )
}