import mongoose, { Document } from "mongoose";

export interface IMenu {
    // id: mongoose.Schema.Types.ObjectId;
    name: string;
    descripyion: string;
    price: number;
    image: string;

}
export interface IMenuDocument extends IMenu, Document {
    createdAt: Date;
    updateAt: Date;
}

const menuSchema = new mongoose.Schema<IMenuDocument>({
    name: {
        type: String,
        required: true,
    },
    descripyion: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

}, { timestamps: true });
export const Menu = mongoose.model("Menu", menuSchema);