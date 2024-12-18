import express from "express";
import { checkAuth, forgotPassword, login, logout, resetpassword, signup, updateProfile, verifyemail } from "../controller/user.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated"; // Fixed spelling

const router = express.Router();

router.route("/check-auth").get(isAuthenticated, checkAuth); // Fixed spelling
router.route("/signup").post(signup); // Imported signup
router.route("/login").post(login);
router.route("/logout").post(logout); // Fixed typo in route
router.route("/verify-email").post(verifyemail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetpassword);
router.route("/profile/update").put(isAuthenticated, updateProfile); // Fixed spelling
