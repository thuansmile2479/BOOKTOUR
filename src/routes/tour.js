import express from "express";
import axios from "axios";
import {
  
  getAllTours,
  
} from "../controllers/tour.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/tours", getAllTours);

export default router;