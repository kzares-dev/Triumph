import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    id: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    }
})

const Goal = mongoose.models.Goal || mongoose.model("Goal", goalSchema )

export default Goal