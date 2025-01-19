const express=require('express')
const router =express.Router()
const {getAllProducts,addProduct} =require('../controllers/product')

router.get('/',getAllProducts)
router.post('/',addProduct)

module.exports=router