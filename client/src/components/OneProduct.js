import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

function OneProduct({ el,setSelectProduct,setView }) {
  const [isDescription, setIsDescription]=useState(false)
  const handleDescription=()=>{
    setIsDescription(!isDescription)
  }
  const onImageClick=()=>{
    setSelectProduct(el)
    setView('product details')
  }
  return (
    <>
      <div className="card"   style={{ width: '18rem', cursor: 'pointer' }}  >
        <img
        onClick={onImageClick}
          src={el.imageUrl}
          className="card-img-top img-fluid d-block"
          alt={el.name}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body" onClick={handleDescription} >
          <h5 className="card-title">{el.name}</h5>
          <p className="card-text"> {isDescription ? el.description : `${el.description.slice(0, 50)}...`}</p>
          <p className="card-text">{el.category}.</p>

          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-primary btn-sm">
             Add to cart
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneProduct;
