import { date, string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const lienheSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
        },
        phone: {
            type: String ,
        },
        mess: {
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
lienheSchema.plugin(mongoosePaginate);
export default new mongoose.model("Lienhe", lienheSchema);
