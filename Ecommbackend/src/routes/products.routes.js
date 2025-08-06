import { Router } from "express";
import { getproducts, getcamera, getlaptop, getprinter, getstorage } from "../controllers/products.controller.js";

const router=Router();

router.route("/").get(getproducts);
router.route("/camera").get(getcamera);
router.route("/laptop").get(getlaptop);
router.route("/storage").get(getstorage);
router.route("/printer").get(getprinter);

export default router;