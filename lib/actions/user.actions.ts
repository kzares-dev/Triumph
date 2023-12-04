"use server";

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
    connectToDB();

    try {
        await User.findOneAndUpdate(
            { id: userId },
            {
                name: name,
                password: password,
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
    const user = await User.findOneAndUpdate(
        { authToken },
        { new: true }
    )
    return user;
}