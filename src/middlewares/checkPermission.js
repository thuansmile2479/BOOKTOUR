import jwt from "jsonwebtoken";
import usermodel from "../models/userModel";
export const checkPermission = async (req, res, next) => {
  try {
    // console.log(req.header.authorrization);
    // return;
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Bạn phải đăng nhập để thực hiện hành động này",
      });
    }
    // next();
    const token = req.headers.authorization.split(" ")[1];

    // console.log(token)
    jwt.verify(token, "duydeptrai", async (error, payload) => {
      if (error) {
        if (error.name === "JsonWebTokenError") {
          return res.status(400).json({
            message: "Token không hợp lệ",
          });
        }
        if (error.name === "TokenExpiredError") {
          return res.status(400).json({
            message: "Token đã hết hạn",
          });
        }
      }
      // console.log(error);
      // console.log(payload);
      const user = await usermodel.findById(payload._id);
      if (user.role != "admin") {
        return res.status(400).json({
          message: "Bạn không có quyền để thực hiện hành động này",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
