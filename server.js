const express = require('express')
const app = express()
app.use(express.json())

const dotenv = require('dotenv').config()
const port = process.env.PORT||3000

const contactRouter = require('./Routes/contactRouter')

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
})
app.use('/api/contacts',contactRouter)



// app.get('/api/contacts',(req,res)=>{
//     res.status('200').json({message:"get all contacts"})  
// })