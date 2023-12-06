import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, required: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true},
    image: String,
    authToken: { type: String, required: true},
    goals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Goal",
        }
    ],
    onboarded: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

