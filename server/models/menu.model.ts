import mongoose, { Schema, Document } from 'mongoose';

export interface IMenu extends Document {
    name: string;
    description: string;
    price: number;
    image: string;
}

const menuSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

export const Menu = mongoose.model<IMenu>('Menu', menuSchema);
