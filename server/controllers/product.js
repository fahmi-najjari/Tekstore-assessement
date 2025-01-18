const {Product}= require('../models')
module.exports={
    getAllProducts:async (req,res) => {
        try {
         const products= await  Product.findAll()
         res.status(200).json(products)
        } catch (error) {
            console.error('error',error)
        }
        
    }
}