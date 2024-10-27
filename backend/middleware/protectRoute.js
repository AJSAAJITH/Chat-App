import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';

const protectRoute = async(req, res, next)=>{
    try {

        const token = req.cookies.jwt;
        if(!token){
            return res.status(400).json({error: "Unauthorized - No Token provide"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(400).json({error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(400).json({error:"User not found"})
        }

        req.user = user;
        next();

        
    } catch (error) {
        return res.status(500).json({message:`Internal server error with: ${error.message}`});
    }
}

export default protectRoute;