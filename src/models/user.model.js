import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: { type: String, required: true, trim: true, index: true },
        avatar: {
            type: String, //cloudinary url
            required: true,
        },
        coverImage: { type: String }, //cloudinary url
        watchHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refereshToken: {
            type: String,
        },
    },
    { timestamps: true }
);

userSchema.pre();

export const User = mongoose.model("User", userSchema);
