import express from "express";
import axios from "axios";
import {
  addLienhe, 
  deleteLienhe, 
  getLienheId,
  updateLienhe, 
  getAllLienhes
} from "../controllers/lienhe.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();  

router.get("/lienhes", getAllLienhes);
router.get("/lienhes/:id", getLienheId);
router.post("/lienhes", addLienhe);  
router.patch("/lienhes/:id", updateLienhe);
router.delete("/lienhes/:id", deleteLienhe);


export default router;
