import { date, string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const blogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        img: {
            type: String,
        },
        dates: {
            type: String,
        },
        content: {
            type: String,
        }, 
        contentmain: {
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
blogSchema.plugin(mongoosePaginate);
export default new mongoose.model("Blog", blogSchema);
