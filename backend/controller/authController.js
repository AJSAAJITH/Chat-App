import User from "../model/userModel.js";
import genarateToken from "../util/genarateJWT.js";
import bcryptjs from 'bcryptjs';

// signup -http://localhost:5000/api/auth/signup
export const signup = async (req, res, next) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;


        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password does not match"
            });
        }

        const user = await User.findOne({ username });
        if(user){
            return res.status(400).json({message:"Username already exsist"});
        }

        // password hashing doing pre create account

        //https://avatar-placeholder.iran.liara.run/document
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser =  new User({
            fullName,
            username,
            password,
            gender,
            profilePic:gender === "male" ? boyProfile : girlProfile
        });
        if(newUser){
            // Ganarate jwt Token here
            genarateToken(newUser._id, res);
            await newUser.save();

            return res.status(201).json({
                success: true,
                message: "User Created Successfully",
                user: newUser
            })
        }else{
            return res.status(201).json({
                message:"Invalid User Details"
            })   
        }
        

    } catch (error) {
        res.status(500).json({ message: `Internal Server Error ${error.message}` });
    }
}

// login
export const login = async (req, res, next) => {
    try {

        const {username, password} = req.body;
        
        if(!username || !password){
            return res.status(400).json({message: "Some Login Details are  missing"});
        }
        const user = await User.findOne({username}).select('+password');

        // Check if user exists first before accessing user.password
        if (!user) {
            return res.status(400).json({ message: "Invalid login details" });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password || "");

        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid login details"})
        }

        genarateToken(user._id, res);

        res.status(201).json({
            success: true,
            message:"user login success",
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

export const logout = async (req, res, next) => {
    try {
        res.cookie('jwt', null,{
            expires:new Date(Date.now()),
            httpOnly:true
        })
        .status(201)
        .json({
            success:true,
            message:"User logout success",
        }) 
    } catch (error) {
       return res 
    }
}


