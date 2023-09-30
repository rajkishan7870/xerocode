
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const generateToken = require("../token/generateToken")

const registerUser = asyncHandler(async (req, res) => {
    const { f_Name, l_Name, email, password } = req.body;

    if (!f_Name || !l_Name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error("User already Exist");
    }
    
    const user = await User.create({
        f_Name,
        l_Name,
        email,
        password,
    });


    if (user) {
        res.status(201).json({
            _id: user._id,
            f_Name: user.f_Name,
            l_Name: user.l_Name,
            email: user.email,
            token : generateToken(user._id)
        })
    }
    else {
        res.status(401);
        throw new Error("Failed to create User");
    }

});

const authUser = asyncHandler(async (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await user.matchPassword(password) ) {
        res.status(201).json({
            _id: user._id,
            f_Name: user.f_Name,
            l_Name: user.l_Name,
            email: user.email,
            token : generateToken(user._id)
        })
    }
    else {
        res.status(401);
        throw new Error("Invalid Email or password");
    }


})

module.exports = {registerUser, authUser}