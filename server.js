const express = require('express')
const app = express()
const contactRouter = require('./Routes/contactRouter')
const dotenv = require('dotenv').config()
const port = process.env.PORT||3000
const connectDb = require('./Config/dbConnection')
connectDb();
app.use(express.json())

app.use('/api/contacts',contactRouter)

//middle-ware function
// app.use((req,res,next)=>{
//     console.log(req.method,req.url)
//     console.log(Date.now())
//     next()
// })

app.get('/',(req,res)=>{
    res.status(200).json({message:"get all contact from server.js"}) 
})

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
})