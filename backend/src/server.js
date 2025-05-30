import express from 'express';
import dotenv from "dotenv";
import {initDB} from './config/db.js'
import ratelimiter from './middleware/rateLimiter.js';

import transactionsRoute from "./routes/transactionsRoute.js"
dotenv.config();
const app = express()
//middlewares
app.use(ratelimiter)
app.use(express.json())
const PORT = process.env.PORT || 5001;


app.use('/api/v1/transactions', transactionsRoute)
initDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}`);

})  
})