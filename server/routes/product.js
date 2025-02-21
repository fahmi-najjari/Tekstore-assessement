const express=require('express')
const router =express.Router()
const {getAllProducts,addProduct,updateProduct,deleteProduct} =require('../controllers/product')

router.get('/',getAllProducts)
router.post('/',addProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)


module.exports=router