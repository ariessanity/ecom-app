import express from "express";
import {
  getProductById,
  getProducts,
  getTopProducts,
} from "../controllers/productControler.js";
const router = express.Router();

router.route("/").get(getProducts);
router.get("/top", getTopProducts);
router.route("/:id").get(getProductById);

export default router;
