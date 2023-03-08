// to create server and app
import express from 'express'
const app = express()

// to import routers 
import userRoute from './routers/user.route.js'
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";


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
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);


// to app connect to port 
app.listen(8800,()=>{
    connect()
    console.log("Backend server is running...")
})