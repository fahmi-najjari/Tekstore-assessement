const {Product}= require('../models')
module.exports={
    getAllProducts:async (req,res) => {
        try {
         const products= await  Product.findAll()
         res.status(200).json(products)
        } catch (error) {
            console.error('error',error)
        }
        
    },
    addProduct :async (req,res)=>{
        try {
            let product =req.body
            const newProduct = await Product.create(product)
            res.status(201).json(newProduct)

        } catch (error) {
            throw error
        }
    }

}