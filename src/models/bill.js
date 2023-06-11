import { date, string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const billSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        tour: {
            type: String,
            require: true,
        },
        nguoilon: {
            type: String,
        },
        nguoibe: {
            type: String,
        },
        location: {
            type: String,
        }, 
        dateee: {
            type: String,
        }, 

        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
billSchema.plugin(mongoosePaginate);
export default new mongoose.model("Bill", billSchema);