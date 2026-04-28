import userSchema from "../models/userSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv/config"
import { verifyMail } from "../emailVerify/verifyMail.js";

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const existing = await userSchema.findOne({ email });
    if (existing) {
      return res.status(401).json({
        success: false,
        message: "User already Registered",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10)
    const user = await userSchema.create({ userName, email, password: hashpassword });

    const token = jwt.sign({userId:user._id}, process.env.secretKey,{
      expiresIn:"5m"
    })
    verifyMail( token, email)
    user.token = token
    await user.save()
    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User not Registered",
    });
  }
};
