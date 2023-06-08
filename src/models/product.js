import { string } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    } ,
    img: {
      type: String,
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
productSchema.plugin(mongoosePaginate);
export default new mongoose.model("Product", productSchema);
