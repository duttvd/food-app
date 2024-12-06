import { z } from "zod";

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),  // Corrected .main to .min
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    contact: z.string().min(10, "Contact number must be 10 digits").max(10, "Contact number must be 10 digits"),  // Corrected to .min and .max for exact length
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
