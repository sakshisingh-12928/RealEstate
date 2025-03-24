import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import AgentRouter from './routes/AgentRoute.js'
import BookingRouter from './routes/BookingRoute.js'
import BuyersRouter from './routes/BuyersRoute.js'
import FinanceRouter from './routes/FinanceRoute.js'
import LeaseRouter from './routes/LeaseRoute.js'
import PropertyRouter from './routes/PropertyRoute.js'
import SellerRouter from './routes/SellerRoute.js'


import {connectDb} from './config/db.js';
import { createAgent } from './controllers/AgentController.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001

app.use("/Agent", AgentRouter ) 
app.use("/Booking" , BookingRouter )
app.use("/Buyers" , BuyersRouter )
app.use("/Finance" , FinanceRouter )
app.use("/Lease" , LeaseRouter )
app.use("/Property" , PropertyRouter)
app.use("/Seller" , SellerRouter)


app.get('/',(req,res) => {
    res.send("Hello World")
})
connectDb();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});