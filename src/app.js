import express from "express";
import routerProduct from "./routes/product"; 
import routerBlog from "./routes/blog";
import routerTour from "./routes/tour";


const app = express();
import mongoose from "mongoose"; 
import cors from "cors"; 
 
app.use(express.json());
 
app.use(cors());
app.use("/api", routerProduct);  
app.use("/api", routerBlog);  
app.use("/api",routerTour)



// Connect to db
mongoose
  .connect("mongodb://127.0.0.1:27017/angular_node")
  .then(() => {
    console.log("Ok ");
  })
  .catch((error) => {
    console.log("loi ket noi");
  });

export const viteNodeApp = app;
