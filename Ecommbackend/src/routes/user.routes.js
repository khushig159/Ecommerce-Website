import { Router } from "express";
import { loginUser, logout, registerUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router=Router();

router.route("/signup").post(registerUser)
router.route("/login").post(loginUser)

router.route("/logout").post(auth, logout)
export default router;