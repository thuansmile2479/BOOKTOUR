import express from "express";
import axios from "axios";
import {
  addBill,
  deleteBill,
  getAllBills,
  getBillId,
  updateBill,
} from "../controllers/bill.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/bills", getAllBills);
router.get("/bills/:id", getBillId);
router.post("/bills", addBill);
router.patch("/bills/:id", updateBill);
router.delete("/bills/:id", deleteBill);
export default router;
