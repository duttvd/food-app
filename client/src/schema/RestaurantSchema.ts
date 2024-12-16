import { z } from "zod";

export const restaurantFormSchema = z.object({
    restaurantName: z.string().nonempty({ message: "Restaurant name is required" }),
    city: z.string().nonempty({ message: "City name is required" }),
    country: z.string().nonempty({ message: "Country name is required" }),
    deliveryTime: z.number().min(0, { message: "Delivery time cannot be negative" }),
    cuisines: z.array(z.string()),
    imageFile: z
        .instanceof(File)
        .optional()
        .refine((file) => file && file.size > 0, {
            message: "Image file is required",
        }),
});

export type restaurantFormSchema = z.infer<typeof restaurantFormSchema>;
