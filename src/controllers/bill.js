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