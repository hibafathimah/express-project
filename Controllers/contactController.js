const getContact = (req,res)=>{
    res.status('200').json({message:"get all contacts"})
}

const postContact = (req,res)=>{
   res.status('200').json({message:`create contacts for ${req.body.name}`})  
 }

const putContact = (req,res)=>{
    res.status('200').json({message:`updated for ${req.params.id}`})
}

const deleteContact = (req,res)=>{
    res.status('200').json({message:`deleted for ${req.params.id}`})
}


module.exports={getContact,postContact,putContact,deleteContact}
