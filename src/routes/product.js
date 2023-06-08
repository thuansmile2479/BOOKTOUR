import express from "express";
import axios from "axios";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductId,
  updateProduct,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/products", getAllProducts);
router.get("/products/:id", getProductId);
router.post("/products", addProduct); 
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
