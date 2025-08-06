import jwt from 'jsonwebtoken'
import User from '../models/usermodel.js'
// import cookieParser from 'cookie-parser'

export const auth = async (req, res, next) => {
    try {
        const {refreshtoken} = req.body
        // console.log(refreshtoken)
        if (!refreshtoken) {
            return res.status(401).json({ message: "Unauthorized request" })
        }
        // console.log("reached")
        const decoded = await jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET)
        // console.log(decoded)
        const user = await User.findById(decoded?._id).select("-password -refreshToken")
        if (!user) {
            return res.status(401).json({ message: "Invalid access token" })
        }
        req.user=user;
        req.orderuser=user;
        // console.log(user)
        next();
    } catch (error) {
        res.status(401).json({ message: error?.message||"Invalid access token" })
    }
}