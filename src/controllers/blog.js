import axios from "axios"; 

import dotenv from "dotenv";
import joi from "joi";
import Blog from "../models/blog.js";
import Category from "../models/category.js";
dotenv.config();
const { API_URI } = process.env;
const blogSchema = joi.object({
    name: joi.string().required(),
    img: joi.string().required(),
    dates: joi.string().required(),
    content: joi.string().required(), 
    contentmain: joi.string().required(), 
});
export const getAllBlogs = async (req, res) => {
    // console.log(`${API_URI}/blogs`);
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
        const searchData = (blogs) => {
            return blogs?.docs?.filter((item) =>
                item.name.toLowerCase().includes(_keywords)
            );
        };

        const blog = await Blog.paginate({}, options); 
        
        if (blog.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        } else {
            const searchDataBlog= await searchData(blog);
            // console.log(searchDataBlog);
            const blogsRespone = await { ...blog, docs: searchDataBlog };
            // console.log(blogsRespone);
            return res.status(200).json(blog);
        }
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const getBlogId = async function (req, res) {
    // const id = req.params.id;
    // const { data: blog } = await axios.get(` ${API_URI}/blogs/${id}`);
    try {
        const blog = await Blog.findById(req.params.id).populate(
            "categoryId"
        );
        if (blog.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(blog);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const addBlog = async function (req, res) {
    try {
        const { error } = blogSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        // const { data: blog } = await axios.post(`${API_URI}/blogs`, req.body);
        //   const blogs = await response.json();
        const blog = await Blog.create(req.body);
        if (!blog) {
            return res.json({
                message: "Không thêm được sản phẩm",
            });
        }
        await Category.findByIdAndUpdate(blog.categoryId, {
            $addToSet: {
                blogs: blog._id,
            },
        });
        return res.json({
            message: "Thêm thành công",
            data: blog,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const updateBlog = async function (req, res) {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!blog) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data: blog,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const deleteBlog = async function (req, res) {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        return res.json({
            message: "Xóa sản phẩm thành công",
            blog,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};