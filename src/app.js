import express from "express";
import routerProduct from "./routes/product"; 

const app = express();
import mongoose from "mongoose"; 
import cors from "cors"; 
 
app.use(express.json());
 
app.use(cors());
app.use("/api", routerProduct);  


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
