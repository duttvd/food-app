import mongoose, { Document } from "mongoose";

interface IUser {
    fullname: string;
    email: string;
    password: string;
    country: string;
    address: string;
    city: string;
    contact: string; // Fixed: "contect" → "contact"
    profilePicture: string;
    admin: boolean;
    lastLogin?: Date; // Fixed: "lastlogin" → "lastLogin"
    isVerified?: boolean; // Fixed: "isVeryFied" → "isVerified"
    resetPasswordToken?: string; // Fixed: "resetPosswordTokin" → "resetPasswordToken"
    resetPasswordTokenExpiresAt?: Date; // Fixed: "resetPosswordTokinExpiresAt" → "resetPasswordTokenExpiresAt"
    verificationToken?: string; // Fixed: "veryficationTokin" → "verificationToken"
    verificationTokenExpiresAt?: Date; // Fixed: "veryficationTokinEcpiresAt" → "verificationTokenExpiresAt"
}

export interface IUserDocument extends IUser, Document {
    createdAt: Date;
    updatedAt: Date; // Fixed: "updateAt" → "updatedAt"
}

const userSchema = new mongoose.Schema<IUserDocument>(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        contact: { // Fixed: "contect" → "contact"
            type: String,
            required: true,
        },
        address: {
            type: String,
            default: "Update your address",
        },
        city: {
            type: String,
            default: "Update your city",
        },
        country: {
            type: String,
            default: "Update your country",
        },
        profilePicture: {
            type: String,
            default: "",
        },
        admin: {
            type: Boolean,
            default: false
        },
        // Advanced authentication
        lastLogin: { // Fixed: "lastlogin" → "lastLogin"
            type: Date,
            default: Date.now,
        },
        isVerified: { // Fixed: "isVeryFied" → "isVerified"
            type: Boolean,
            default: false,
        },
        resetPasswordToken: String, // Fixed: "resetPosswordTokin" → "resetPasswordToken"
        resetPasswordTokenExpiresAt: Date, // Fixed: "resetPosswordTokinExpiresAt" → "resetPasswordTokenExpiresAt"
        verificationToken: String, // Fixed: "veryficationTokin" → "verificationToken"
        verificationTokenExpiresAt: Date, // Fixed: "veryficationTokinEcpiresAt" → "verificationTokenExpiresAt"
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
