import express from "express";
import routerProduct from "./routes/product";
import routerTour from "./routes/tour";
import routerBlog from "./routes/blog";
import routerLienhe from "./routes/lienhe";
import routerBill from "./routes/bill";
import authRouter from "./routes/auth";

const app = express();
import mongoose from "mongoose"; 
import cors from "cors"; 
 
app.use(express.json());
 
app.use(cors());
app.use("/api", routerProduct); 
app.use("/api", routerTour); 
app.use("/api", routerBlog); 
app.use("/api", routerBill); 
app.use("/api", routerLienhe); 
app.use("/api", authRouter); 


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
