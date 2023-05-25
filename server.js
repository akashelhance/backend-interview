const express= require("express")
const http = require("http")
const cors= require("cors")

// const mongoose = require("mongoose")
require("dotenv").config();

// const authRoutes = require("./routes/authRoutes")
const userRoutes = require('./routes/userRoute');

const PORT = 5000;

const app=express();
app.use(express.json())
app.use(cors());

//register the routes:

app.use('/api', userRoutes);

app.use('/', (req,res)=>{
    res.json({"msg": "The api is running"})
})



const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });