const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

const app = express()

const routers = require("./Routes/Routes");
const authRoute = require("./Routes/AdminRoutes");


// const cityLists = require("./cityList")
// const cityList = require("./Models/cityList");

app.use(express.json())

app.use(cors())

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, async () => {
    // await cityList.insertMany(cityLists)
    //     .then(res => console.log("Data Added"))
    //     .catch(err => console.log(err))
    console.log("Database is connected")
})

app.use("/", routers)
app.use("/", authRoute);

app.listen(5000, () => {
    console.log(`SERVER RUNNING! 5000`)
})
