import jwt from "jsonwebtoken";

const genarateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRE
    });

    res.cookie("jwt", token, {
        expiresIn: new Date(Date.now()+ process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // MS
        httpOnly:true, // prevent XSS attacks cross-site scripting attacks
        sameSite:"strict" // CSRF attacks cross-site request forgery attacks
    })
}

export default genarateToken;