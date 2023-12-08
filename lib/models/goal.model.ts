import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    id: { type: String, required: true },
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    goal: {
        type: Number
    },
    current: {
        type: Number
    },
    dailyTrack: {
        type: Array
    },
    miliestones: {
        type: Array
    },
    monthlyQuota: {
        type: Number
    },
    deadline: {
        type: String
    },
})

const Goal = mongoose.models.Goal || mongoose.model("Goal", goalSchema )

export default Goal