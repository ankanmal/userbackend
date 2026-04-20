

import mongoose from "mongoose";
import 'dotenv/config'

const url = process.env.DB_STRING

export default async function dbConnect(){
    try {
        await mongoose.connect(url)
        console.log(`Connected to MongoDB Server`)
    } catch (error) {
        console.log(`Failed to Connect to Server error: ${error}`)
    }
}