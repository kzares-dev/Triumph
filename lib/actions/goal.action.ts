"use server";

import Goal from "../models/goal.model";
import { connectToDB } from "../mongoose";

type Props = {
    id: string,
    user: string,
    goal: Number,
    current: Number,
    dailyTrack: Array<any>,
    miliestones: Array<any>,
    monthlyQuota: Number,

}

export async function updateGoal({
    id,
    user,
    goal,
    current,
    dailyTrack,
    miliestones,
    monthlyQuota,
}: Props): Promise<void> {
    connectToDB()

    try {
        await Goal.findOneAndUpdate(
            { id: id },
            {
                user : user ,
                goal : goal ,
                current : current ,
                dailyTrack : dailyTrack ,
                miliestones : miliestones ,
                monthlyQuota : monthlyQuota ,
            },
            { upsert: true }
        )

    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message} `)
    }

}