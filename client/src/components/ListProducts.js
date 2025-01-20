import React from 'react'
import OneProduct from './OneProduct';

function ListProducts({filteredProductsbar,filteredProducts,setSelectProduct,setView}) {
  
    if (!filteredProducts ) {
        return <p>No products </p>;}


 const productsToRender  = filteredProductsbar || filteredProducts
  return (
    
    
    <div className="container">
    <div className="row">
    {productsToRender .map((el,i)=>(
        
           <div className="col-md-4 mb-4" key={el.id}>
            <OneProduct el={el}  setSelectProduct={setSelectProduct} setView={setView}/>
          </div>

        

  ))}
  </div>
  </div>
  
  )
}

export default ListProducts