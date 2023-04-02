import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import UserModel from './models/Users';

import * as dotenv from 'dotenv';
dotenv.config();

import connection from "./db";

const app:any=express();

//converts frontend data to json
app.use(express.json());
app.use(cors());

connection();

app.get('/getAllUsers',async(req:any,res:any)=>{

    try{
        const allUsers = await UserModel.find({});

        //sending json data to frontend
        res.json(allUsers);
    }
    catch(err)
    {
        res.json(err);
    }
})

app.post('/addUser',async(req:any,res:any)=>{

    try{

        // const newuser = new UserModel({
        //     name: 'yash',
        //       age: 22,
        //       username: 'ymc'
        // });
        const newuser = new UserModel(req.body);
        await newuser.save();
        // const allUsers = await UserModel.find({});
        res.json(newuser);
    }
    catch(err)
    {
        res.json(err);
    }
})

app.listen(3001,()=>{
    console.log("SERVER LISTENING");
})