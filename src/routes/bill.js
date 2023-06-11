import express from "express";
import axios from "axios";
import {
  
   
  getAllBills,getBillId,addBill
  
   
} from "../controllers/bill.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/bills", getAllBills);
router.get("/bills/:id", getBillId);
router.post("/bills", addBill);

 
export default router;
