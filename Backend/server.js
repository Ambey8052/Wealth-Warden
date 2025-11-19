import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './model/user.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/customerDB")
.then(() => console.log("Database is connected"))
.catch(err => console.log("Database is not connected", err))

app.post("/register",(req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log("data not recieved",err))
})

app.post("/login",(req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        if(user.password!== password){
            return res.status(400).json({message:"Incorrect password"})
        }
        return res.json({message:"Login Succsess"})
    })
    .catch(err => {console.error("login error", err)
        return res.status(500).json({message:"server db error",error:err.message})
    })

})

app.get("/",(req, res) =>{
    res.send("hello karan")
});

app.listen(6001,() => {
    console.log("server is running");
})

