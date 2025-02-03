const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const register = async (req, res) => {
    console.log("test");
    try {
        const { email } = req.body;
        const checkWithEmail = await UserModel.findOne({ email: email });
        if (checkWithEmail) {
            return res.status(409).send({ success: false, message: `User with ${email} already exists` });
        }
        const user = await UserModel.create({ viewPassword: req.body.password, ...req.body });
        if (!user) {
            return res.status(400).send({ success: false, message: `Unable to create user` }); 
        }
        return res.status(201).send({ success: true, message: `User created successfully`,user }); 
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });   
    }
}

const login = async (req, res) => {
    console.log("test");
    try {
        const { username, password } = req.body;
        if (username == "" || password == "") {
            return res.status(402).send({ success: false, message: `User name and password should not be blank!` });
        }
        const user = await UserModel.findOne({ username: username });
        if (!user) {
            return res.status(200).send({ success: false, message: `User with ${username} does not exists` });
        }
        const match = bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send({ success: false, message: `Invalid credentials` });  
        }
        const token = jwt.sign({ user }, process.env.SECRET_KEY);
        return res.status(201).send({ success: true, message: `User login successfully`,token,user }); 
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });   
    }
}

const get_all_users = async (req,res)=>{
 try {
    console.log("it is in");
    
    const all_users = await UserModel.find();
    return res.status(201).send({ success: true, message: `All users`,all_users });
 } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
 }
}

module.exports = { register,login,get_all_users };