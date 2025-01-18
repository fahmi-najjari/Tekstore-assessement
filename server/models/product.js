





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
      category: {
        type: DataTypes.ENUM('Laptops', 'Smartphones', 'Accessories'),
        allowNull: false,
        
      },
      imageUrl: {
        type: DataTypes.STRING,
        
      },
      

  },
  {
    
  },
);
return Product 
}



