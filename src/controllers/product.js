import axios from "axios";
// const API_URI = "http://localhost:3000/products";
import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/product";
import Category from "../models/category.js";
dotenv.config();
const { API_URI } = process.env;
const productSchema = joi.object({
  name: joi.string().required(), 
  img: joi.string().required(),
  mess: joi.string(),
  categoryId: joi.string(),
});
export const getAllProducts = async (req, res) => {
  // console.log(`${API_URI}/products`);
  const {
    _sort = "createAt",
    _order = "_asc",
    _limit = 30,
    _page = 1,
    _keywords,
  } = req.query;
  const options = {
    page: _page,
    limit: _limit,
    sort: { [_sort]: _order === "desc" ? -1 : 1 },
  };

  try {
    const searchData = (products) => {
      return products?.docs?.filter((item) =>
        item.name.toLowerCase().includes(_keywords)
      );
    };

    const product = await Product.paginate({}, options);
    // console.log(product);
    if (product.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    } else {
      const searchDataProduct = await searchData(product);
      // console.log(searchDataProduct);
      const productsRespone = await { ...product, docs: searchDataProduct };
      // console.log(productsRespone);
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const getProductId = async function (req, res) {
  // const id = req.params.id;
  // const { data: product } = await axios.get(` ${API_URI}/products/${id}`);
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (product.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const addProduct = async function (req, res) {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    // const { data: product } = await axios.post(`${API_URI}/products`, req.body);
    //   const products = await response.json();
    const product = await Product.create(req.body);
    if (!product) {
      return res.json({
        message: "Không thêm được sản phẩm",
      });
    }
    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },
    });
    return res.json({
      message: "Thêm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const updateProduct = async function (req, res) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Cập nhật sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const deleteProduct = async function (req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    return res.json({
      message: "Xóa sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};