import express from "express";
import axios from "axios";
import {
  addLienhe, 
  getLienheId, 
} from "../controllers/lienhe.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();  


router.get("/lienhes/:id", getLienheId);
router.post("/lienhes", addLienhe);  


export default router;
