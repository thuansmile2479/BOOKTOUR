import axios from "axios"; 

import dotenv from "dotenv";
import joi from "joi";
import Tour from "../models/tour.js";
import Category from "../models/category.js";
dotenv.config();
const { API_URI } = process.env;
const tourSchema = joi.object({
    name: joi.string().required(),
    img: joi.string().required(),
    nametour: joi.string().required(),
    quantity: joi.number().required(),
    price: joi.string().required(),
    address: joi.string().required(),
});
export const getAllTours = async (req, res) => {
    // console.log(`${API_URI}/tours`);
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
        const searchData = (tours) => {
            return tours?.docs?.filter((item) =>
                item.name.toLowerCase().includes(_keywords)
            );
        };

        const tour = await Tour.paginate({}, options); 
        
        if (tour.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        } else {
            const searchDataTour= await searchData(tour);
            // console.log(searchDataTour);
            const toursRespone = await { ...tour, docs: searchDataTour };
            // console.log(toursRespone);
            return res.status(200).json(tour);
        }
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};