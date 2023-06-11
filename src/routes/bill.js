import express from "express";
import axios from "axios";
import {
  
   
  getAllBills,
  
   
} from "../controllers/bill.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/bills", getAllBills);

 
export default router;
