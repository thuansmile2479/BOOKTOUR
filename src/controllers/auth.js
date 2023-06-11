import User from '../models/user';
import { signinSchema, signupSchema } from '../schemas/auth';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign({ _id: user._id }, 'banThayDat', {
      expiresIn: '7d',
    });
    user.password = undefined;
    return res.status(201).json({
      message: 'User created successfully',
      accessToken: token,
      user,
    });
  } catch (error) {}
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { error } = signinSchema.validate(
      { email, password },
      { abortEarly: false }
    );

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: 'Tài khoản không tồn tại',
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Khong dung mat khau',
      });
    }
    const token = jwt.sign({ _id: user._id }, 'banThayDat', {
      expiresIn: '7d',
    });

    user.password = undefined;

    return res.status(200).json({
      message: 'Đăng nhập thành công',
      accessToken: token,
      user,
    });
  } catch (error) {}
};
