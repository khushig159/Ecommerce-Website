import { Router } from "express";
import {submitorder,feedorderdb} from "../controllers/orders.controller.js"
import { auth } from "../middlewares/auth.middleware.js";

const router=Router()

router.route("/execute").post(auth,submitorder)
router.route("/placeorder").post(auth,feedorderdb)

export default router