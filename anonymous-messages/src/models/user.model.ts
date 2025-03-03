
import mongoose, { Schema } from "mongoose";
import { Message, messageSchema } from "./message.model";
import {z} from "zod"

export interface User {
    username: string;
    email: string;
    password: string;
    isAccpected: boolean;
    message: Message[];
}

const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        minlength: 5,
        maxlength: 30,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    isAccpected: {
        type: Boolean,
        required: true,
        default: true
    },
    message: {
        type: [messageSchema],
        default: []
    }
})


export default userSchema