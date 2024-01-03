const express = require('express')
const router = express.Router()
//GET
// router.route('/').get((req,res)=>{
//     res.status('200').json({message:"get all contacts"})  
// })

//POST
//  router.route('/').post((req,res)=>{
//      res.status('200').json({message:`create contacts ${req.body.name}`})  
//  })

//POST
// router.route('/:id').put((req,res)=>{
//     res.status('200').json({message:`updated for ${req.params.id}`})  
// })

//DELETE
// router.route('/:id').delete((req,res)=>{
//     res.status('200').json({message:`deleted for ${req.params.id}`})
// })


//Same routes can be chained (GET and POST have same route)
router.route('/').get((req,res)=>{
    res.status('200').json({message:"get all contacts"})
}).post((req,res)=>{
    res.status('200').json({message:`create contacts ${req.body.name}`})  
})


module.exports=router