import { Request, Response } from "express";
import uploadImageOnCloudinary from "../utils/imageUpload";
import { Menu } from "../models/menu.model";
import { Restaurant } from "../models/restaurant.model";
import mongoose from "mongoose";

export const addMenu = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const restaurant = await Restaurant.findById(req.params.restaurantId);
        const menu = await Menu.findById(req.params.menuId);

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: "Restaurant not found"
            });
        }

        if (!menu) {
            return res.status(404).json({
                success: false,
                message: "Menu not found"
            });
        }

        // Cast menus as ObjectId[] if needed
        restaurant.menus.push(menu._id);

        await restaurant.save();

        return res.status(200).json({
            success: true,
            message: "Menu added to restaurant",
            restaurant
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const editMenu = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;
        const file = req.file;
        const menu = await Menu.findById(id);
        if (!menu) {
            return res.status(404).json({
                success: false,
                message: "Menu not found!"
            })
        }
        if (name) menu.name = name;
        if (description) menu.description = description;
        if (price) menu.price = price;

        if (file) {
            const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File);
            menu.image = imageUrl;
        }
        await menu.save();

        return res.status(200).json({
            success: true,
            message: "Menu updated",
            menu,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
