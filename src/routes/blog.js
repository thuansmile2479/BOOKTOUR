import express from "express";
import axios from "axios";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getBlogId,
  updateBlog,
} from "../controllers/blog.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router(); 
router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlogId);
router.post("/blogs", addBlog);


export default router;
