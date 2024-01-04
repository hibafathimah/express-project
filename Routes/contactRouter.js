const express = require('express')
const router = express.Router()


const {getContact,postContact,putContact,deleteContact} = require('../Controllers/contactController')
router.route('/').get(getContact)
router.route('/').post(postContact)
router.route('/:id').put(putContact)
router.route('/:id').delete(deleteContact)

//GET
// router.route('/').get((req,res)=>{
//     res.status('200').json({message:"get all contacts"})  
// })

//POST
//  router.route('/').post((req,res)=>{
//      res.status('200').json({message:`create contacts ${req.body.name}`})  
//  })

//PUT
// router.route('/:id').put((req,res)=>{
//     res.status('200').json({message:`updated for ${req.params.id}`})  
// })

//DELETE
// router.route('/:id').delete((req,res)=>{
//     res.status('200').json({message:`deleted for ${req.params.id}`})
// })


//Same routes can be chained (GET and POST have same route)
// router.route('/').get((req,res)=>{
//     res.status('200').json({message:"get all contacts"})
// }).post((req,res)=>{
//     res.status('200').json({message:`create contacts ${req.body.name}`})  
// })


module.exports=router