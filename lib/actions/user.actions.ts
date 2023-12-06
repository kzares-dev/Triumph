"use server";

import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

type Props = {
    userId: string,
    name: string,
    password: string,
    email: string,
    image: string,
    authToken: string,
}

export async function updateUser({
    userId,
    name,
    password,
    email,
    image = "",
    authToken,
}: Props): Promise<void> {

    //hash and salt the user password
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const secretPassword = `${salt}:${hashedPassword}`

    //setup connection to db
    connectToDB();

    //attempt to create/update the user on de database
    try {
        await User.findOneAndUpdate(
            { id: userId },
            {
                name: name,
                password: secretPassword,
                email: email,
                image: image,
                authToken: authToken,
                onboarded: false
            },
            { upsert: true }
        );
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message} `)
    }

}

export async function verifyUser(authToken: any) {
    //setup connection to db
    connectToDB();

    const user = await User.findOneAndUpdate(
        { authToken },
        { $set: { verified: true } },
        { new: true }
    )
    return user;
}

export async function signIn({email , password}: { email: string, password:string }) {
    //setup connection to db
    connectToDB();

    try{
        //get the user with same email from database
        const user = await User.findOne(
            {email}
        )
        console.log(user)

        if(!user) return undefined

        //get the password and compare the hash and salt
        const [salt, key] = user.password.split(':');
        const hashedBuffer = scryptSync(password, salt, 64);
      
        //protection against timming attacks
        const keyBuffer = Buffer.from(key, 'hex');
        const match = timingSafeEqual(hashedBuffer, keyBuffer);

        if(match) return user 
        else return undefined

    }catch(error: any) {
        throw new Error(`Failed to login user: ${error.message} `)
    }
}

