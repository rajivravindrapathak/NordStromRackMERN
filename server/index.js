const express = require("express")
const cors = require("cors")

const {userController} = require("./routes/user.routes")

const { connection } = require("./config/db")
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