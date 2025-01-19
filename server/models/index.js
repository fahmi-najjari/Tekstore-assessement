const { Sequelize, DataTypes } = require('sequelize');
const data=require('./data')


const connection = new Sequelize('tekstore1', 'root', 'root', {
    host: 'localhost',
    dialect:  'mysql' 
  });

  connection.authenticate() 
  .then(()=>{
    console.log("seqeulize connected")

  })
  .catch((error)=>{
    console.error("error is ",error)
  })


  const Product = require('./product')(connection,DataTypes )

 /* const creatingData=async(sampleData)=>{
  try {
    const products = await Product.bulkCreate(sampleData)
    console.log('data created successfully');
    
  } catch (error) {
    console.error('error',error)
    
  }

 }

creatingData(data) */


 


  /* connection.sync({alter:true})
  .then (()=>{
 console.log("sync uccessully");
 
  })
  .catch((error)=>{
    console.error("error is ",error)
  }) */
module.exports ={connection,Product}