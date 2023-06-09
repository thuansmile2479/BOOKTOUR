import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        img: {
            type: String,
        },
        nametour: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        price: {
            type: String,
        },
        address: {
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
tourSchema.plugin(mongoosePaginate);
export default new mongoose.model("Tour", tourSchema);