const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db');
require('dotenv').config({ path: './config/config.env' });

const app=express();

app.use(cors());
app.use(express.json());

connectDB();

const transactions=require('./routes/transaction');
app.use('/api/v1/transactions',transactions);

app.listen(process.env.PORT,()=>console.log("Listening"));