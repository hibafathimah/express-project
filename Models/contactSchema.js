const mongoose = require('mongoose')
const contactSchema = mongoose.Schema(
    {name: {type:String, required: ["true","name is required"] },
    phone: {type:Int16Array, required: ["true","phone number is required"]},
    email: {type:String, required: ["true","mail Id is required"]},
    },
    {
    timestamps: ["true"]
    }
    
    )