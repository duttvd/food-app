import { Request, Response } from "express";
import { Restaurant } from "../models/restauranet.model";
import { Multer } from "multer";

export const createRestaurant = async (req: Request res: Response) => {
    try {
        const { restaurantName, city, country, price, deliveryTame, cuisines } = req.body;
        const file = req.file;


        const restaurant = await Restaurant.findOne({ user: req.id });
        if (restaurant) {
            return res.status(400).json({
                success: false,
                message: "Restaurant already exist for this user"
            })
        }
        if (!file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            })
        }
        const imageUrl = await uploadImageOnCloudinary
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })

    }
}