const { Router } = require("express");
const { UserModel } = require("../db/model");

const login = Router();

login.post("/",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const data = await UserModel.find({email,password})
        res.send(data)
    } catch (error) {
        console.log("err");
        res.send(error)
    }
})

module.exports = {
	login,
};