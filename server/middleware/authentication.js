const jwt = require('jsonwebtoken');

require("dotenv").config()


const authentication = (req, res, next) =>{
    if(!req.headers.authorization){
        return res.send({msg:"plz login again"})
    }
    const token  =  req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
        if(err){
            res.send("plz login")
        }
        else{
            req.body.userId =  decoded.userId
            //console.log("urrid", decoded.userId)
            next()
            //res.send("here are the products")
        }
    })
}

module.exports ={ authentication};