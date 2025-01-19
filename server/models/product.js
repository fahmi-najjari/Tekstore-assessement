





module.exports= (connection,DataTypes)=>{
    const Product =connection.define(
  'Product',
  {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      categories: {
        type: DataTypes.ENUM('phones', 'electronics', 'computers',),
        allowNull: false,
      },
      

  },
  {
    
  },
);
return Product 
}



