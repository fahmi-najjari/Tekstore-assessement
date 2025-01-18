import React from 'react'
import OneProduct from './OneProduct';

function ListProducts({sample}) {
  
    if (!sample ) {
        return <p>No products </p>;}



  return (
    <div>
    
    <div className="container">
    <div className="row">
    {sample.map((el,i)=>(
        
           <div className="col-md-4 mb-4" key={el.id}>
            <OneProduct el={el} />
          </div>

        

  ))}
  </div>
  </div>
  </div>
  )
}

export default ListProducts