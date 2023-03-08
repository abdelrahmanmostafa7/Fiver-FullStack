// to create server and app
import express from 'express'
const app = express()

// to import routers 
import userRoute from './routers/user.route.js'


// to connect to DB  and secure mongo connection in env file
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery',true)
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB...');
        } catch (error) {
        console.log(error);
        }
}

// create end point 
app.use("/api/users", userRoute)



// to app connect to port 
app.listen(8800,()=>{
    connect()
    console.log("Backend server is running...")
})