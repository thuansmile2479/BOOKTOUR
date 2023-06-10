import axios from "axios"; 

import dotenv from "dotenv";
import joi from "joi";
import Lienhe from "../models/lienhe.js";
import Category from "../models/category.js";
dotenv.config();
const { API_URI } = process.env;
const lienheSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone: joi.string().required(),
    mess: joi.string().required(), 
});


export const getLienheId = async function (req, res) {

    try {
        const lienhe = await Lienhe.findById(req.params.id).populate(
            "categoryId"
        );
        if (lienhe.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(lienhe);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const addLienhe = async function (req, res) {
    try {
        const { error } = lienheSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const lienhe = await Lienhe.create(req.body);
        if (!lienhe) {
            return res.json({
                message: "Không thêm được sản phẩm",
            });
        }
        await Category.findByIdAndUpdate(lienhe.categoryId, {
            $addToSet: {
                lienhes: lienhe._id,
            },
        });
        return res.json({
            message: "Thêm thành công",
            data: lienhe,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};


export const updateLienhe = async function (req, res) {
    try {
        const lienhe = await Lienhe.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!lienhe) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data: lienhe,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const deleteLienhe = async function (req, res) {
    try {
        const lienhe = await Lienhe.findByIdAndDelete(req.params.id);

        return res.json({
            message: "Xóa sản phẩm thành công",
            lienhe,
        });
      
export const getAllLienhes = async (req, res) => {
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
        const searchData = (lienhes) => {
            return lienhes?.docs?.filter((item) =>
                item.name.toLowerCase().includes(_keywords)
            );
        };

        const lienhe = await Lienhe.paginate({}, options); 
        
        if (lienhe.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        } else {
            const searchDataLienhe= await searchData(lienhe);
            const lienhesRespone = await { ...lienhe, docs: searchDataLienhe };
            return res.status(200).json(lienhe);
        }
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};