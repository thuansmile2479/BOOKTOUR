import express from "express";
import axios from "axios";
import {
  addTour,
  deleteTour,
  getAllTours, getToursId, updateTour,
  
} from "../controllers/tour.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/tours", getAllTours);
router.get("/tours/:id", getToursId);
router.post("/tours", addTour);
router.patch("/tours/:id", updateTour);
router.delete("/tours/:id", deleteTour);

export default router;