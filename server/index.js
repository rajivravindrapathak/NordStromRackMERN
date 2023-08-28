const express = require("express")
const cors = require("cors")

const {userController} = require("./routes/user.routes")
const {productController} = require("./routes/product.routes")

const { connection } = require("./config/db")
const { authentication } = require("./middleware/authentication")
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())  
app.use(cors()); 

app.get("/", (req, res) => {
    res.send("home page")
})

app.use(cors())

app.use("/", userController)
app.use("/", productController)

app.use(authentication)

app.listen(PORT, async ()=> {    
    try {
        await connection;
        console.log("connected to DB")
    } catch (err) {
        console.log("not connected to db")    
        console.log(err)
    }
    console.log(`listning on PORT ${PORT}`)
})