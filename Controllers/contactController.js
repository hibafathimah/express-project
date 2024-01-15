const getContact = (req,res)=>{
    res.status(200).json({message:"get all contacts"})
}

const postContact =async (req,res)=>{
    const {Name,Email,Phone} = req.body; //destructuring

    const contactSchema = require ("../Models/contactSchema");  

    const contact = contactSchema.create({name:Name, phone:Phone, email:Email});  //key:value , key = from contactSchema, value = from contactRouter


   res.status(200).json({message:`create contacts for ${req.body.name}`})  
 }

const putContact = (req,res)=>{
    res.status(200).json({message:`updated for ${req.params.id}`})
}

const deleteContact = (req,res)=>{
    res.status(200).json({message:`deleted for ${req.params.id}`})
}


module.exports={getContact,postContact,putContact,deleteContact}
