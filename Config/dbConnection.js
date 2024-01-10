const mongoose = require('mongoose')
//connecting db to mangoose
const connectDb = async()=>{
    try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('db connected',connect.connection.host,connect.connection.name)
} catch (error) {
    console.log(error)
}}
module.exports=connectDb