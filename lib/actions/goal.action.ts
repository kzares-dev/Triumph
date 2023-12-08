"use server";

import Goal from "../models/goal.model";
import { connectToDB } from "../mongoose";

type Props = {
    id: string,
    userId: string,
    title: string,
    goal: Number,
    current: Number,
    dailyTrack: Array<any>,
    milestones: Array<any>,
    monthlyQuota: Number,
    deadline: string

}

export async function updateGoal({
    id,
    userId,
    title,
    goal,
    current,
    dailyTrack,
    milestones,
    monthlyQuota,
    deadline
}: Props): Promise<void> {
    connectToDB()

    try {
        await Goal.findOneAndUpdate(
            { id: id },
            {
                userId: userId,
                title: title,
                goal: goal,
                current: current,
                dailyTrack: dailyTrack,
                milestones: milestones,
                monthlyQuota: monthlyQuota,
                deadline: deadline
            },
            { upsert: true }
        )



    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message} `)
    }

}

export async function getGoals(userId: string) {

    connectToDB()
    try {
        const goals = await Goal.find({ userId });
        return goals;
    } catch (error: any) {
        throw new Error(`Failed to get goals: ${error.message} `)
    }
}