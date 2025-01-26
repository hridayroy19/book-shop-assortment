
import { model, Schema } from "mongoose";
import { Iuser } from "./user.Interface";


const userSchema = new Schema<Iuser>({
    name: {
        type: String,
        required: [true, "Please provide your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Enter your password"],
    },
    role: {
        type: String,
        required: true,
        default: "user",
        enum: {
            values: ["user", "admin"],
            message: "{VALUE} is not valid, please provide a valid role",
        },
    },
    photo: {
        type: String,
        default: "",
    },
    userStatus: {
        type: String,
        required: true,
        default: "active",
        enum: ["active", "inactive"],
    },
});

export const User = model<Iuser>("user", userSchema);
