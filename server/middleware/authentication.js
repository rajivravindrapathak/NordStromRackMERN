const jwt = require('jsonwebtoken');

require("dotenv").config()


const authentication = (req, res, next) => {
    try {
        const token  =  req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(200).send({ msg:"auth failed", success: false })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId =  decoded.userId
        next()
    } catch (error) {
        return res.status(401).send({ msg: "auth failed", success: false })
    }
}

module.exports ={ authentication};