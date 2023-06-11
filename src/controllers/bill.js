import axios from "axios"; 

import dotenv from "dotenv";
import joi from "joi";
import Bill from "../models/bill.js";
import Category from "../models/category.js";
dotenv.config();
const { API_URI } = process.env;
const billSchema = joi.object({
    name: joi.string().required(),
    nguoilon: joi.string().required(),
    nguoibe: joi.string().required(),
    location: joi.string().required(),  
    dateee: joi.string().required(),  
});
export const getAllBills = async (req, res) => {
    // console.log(`${API_URI}/bills`);
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
        const searchData = (bills) => {
            return bills?.docs?.filter((item) =>
                item.name.toLowerCase().includes(_keywords)
            );
        };

        const bill = await Bill.paginate({}, options); 
        
        if (bill.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        } else {
            const searchDataBill= await searchData(bill); 
            const billsRespone = await { ...bill, docs: searchDataBill };
            // console.log(billsRespone);
            return res.status(200).json(bill);
        }
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const getBillId = async function (req, res) {
    // const id = req.params.id;
    // const { data: bill } = await axios.get(` ${API_URI}/bills/${id}`);
    try {
        const bill = await Bill.findById(req.params.id).populate(
            "categoryId"
        );
        if (bill.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(bill);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const addBill = async function (req, res) {
    try {
        const { error } = billSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        // const { data: bill } = await axios.post(`${API_URI}/bills`, req.body);
        //   const bills = await response.json();
        const bill = await Bill.create(req.body);
        if (!bill) {
            return res.json({
                message: "Không thêm được sản phẩm",
            });
        }
        await Category.findByIdAndUpdate(bill.categoryId, {
            $addToSet: {
                bills: bill._id,
            },
        });
        return res.json({
            message: "Thêm thành công",
            data: bill,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};


export const updateBill = async function (req, res) {
    try {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!bill) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data: bill,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const deleteBill = async function (req, res) {
    try {
        const bill = await Bill.findByIdAndDelete(req.params.id);

        return res.json({
            message: "Xóa sản phẩm thành công",
            bill,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};