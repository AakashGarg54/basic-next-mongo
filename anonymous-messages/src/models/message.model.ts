import mongoose, { Schema } from "mongoose";

export interface Message {
    content: string;
    createdAt: Date;
    createdBy: string;
}

export const messageSchema: Schema<Message> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    createdBy: { type: String, required: true },
});
