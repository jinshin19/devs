import bcrypt, { genSaltSync, getSalt } from 'bcryptjs';

export const hashPassword = ( password: string ): string => {

    const salt = bcrypt.genSaltSync();
    const hashed = bcrypt.hashSync( password, salt );
    return hashed;

}

export const compareHashedPassword = ( password: string, hashedPassword: string ): boolean => {
    return bcrypt.compareSync( password, hashedPassword );
}