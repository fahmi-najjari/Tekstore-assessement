const {Product}= require('../models')
module.exports={
    getAllProducts:async (req,res) => {
        try {
         const products= await  Product.findAll()
         res.status(200).json(products)
        } catch (error) {
            console.error('error',error)
            res.status(500).json('internal server error')
        }
        
    },
    addProduct :async (req,res)=>{
        try {
            let product =req.body
            const newProduct = await Product.create(product)
            res.status(201).json(newProduct)

        } catch (error) {
            console.error('error',error)
            res.status(500).json('internal server error')
        }
    },
    updateProduct: async (req,res)=>{
        try {
            const {id}=req.params
            const product=req.body
            const [updated]= await Product.update(product,{where:{id}})
            if(updated){
                const updatedProduct = await Product.findOne({where:{id}})
                res.status(200).json(updatedProduct)
            }else{
                res.status(404).json({error:"product is not found"})
            }
        } catch (error) {
            console.error('error',error)
            res.status(500).json({error:'internal server error'})
        }
    },deleteProduct: async (req,res)=>{
        try {
            const {id}=req.params
            const deleted = await Product.destroy({where:{id}})
            if(deleted){
                res.status(204).json({error:"product deleted successfully"})

            }else{
                res.status(404).json({error:"product not found"})
            }
        } catch (error) {
            console.error('error',error)
            res.status(500).json({error:'internal server error'})
        }
    }

}