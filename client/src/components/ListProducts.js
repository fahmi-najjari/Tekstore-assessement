import React from 'react'
import OneProduct from './OneProduct';

function ListProducts({filteredProductsbar,filteredProducts,setSelectProduct,setView,handleUpdate,handleDeleteProduct  }) {
  
    if (!filteredProducts ) {
        return <p>No products </p>;}


 const productsToRender  = filteredProductsbar || filteredProducts
  return (
    
    <div className="container">
    <div className="row">
    {productsToRender .map((el,i)=>(
        
           <div className="col-md-4 mb-4" key={el.id}>
            <OneProduct el={el}  setSelectProduct={setSelectProduct} setView={setView} handleUpdate={handleUpdate} handleDeleteProduct ={handleDeleteProduct } />
          </div>

        

  ))}
  </div>
  </div>
  
  )
}

export default ListProducts


/*
import React, { useState } from "react";

function OneProduct({ el, setSelectProduct, setView, HandleaddProduct }) {
  const [isDescription, setIsDescription] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: el.name,
    description: el.description,
    categories: el.categories,
    imageUrl: el.imageUrl
  });

  const handleDescription = () => {
    setIsDescription(!isDescription);
  };

  const onImageClick = () => {
    setSelectProduct(el);
    setView('product details');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    HandleaddProduct(el.id, updatedProduct);
    setIsUpdate(false);
  };

  const setUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <>
      <div className="card" style={{ width: '18rem', cursor: 'pointer' }}>
        {!isUpdate ? (
          <>
            <img 
              onClick={onImageClick} 
              src={el.imageUrl} 
              className="card-img-top img-fluid d-block" 
              alt={el.name} 
              style={{ height: "150px", objectFit: "cover" }} 
            />
            <div className="card-body" onClick={handleDescription}>
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">
                {isDescription ? el.description : `${el.description.slice(0, 50)}...`}
              </p>
              <p className="card-text">{el.categories}</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-primary btn-sm">Add to cart</a>
                <a href="#" className="btn btn-primary btn-sm">delete</a>
                <a href="#" className="btn btn-primary btn-sm" onClick={setUpdate}>update</a>
              </div>
            </div>
          </>
        ) : (
          <div className="card-body">
            <form onSubmit={handleSubmitUpdate}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={updatedProduct.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={updatedProduct.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category:</label>
                <input
                  type="text"
                  className="form-control"
                  name="categories"
                  value={updatedProduct.categories}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL:</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  value={updatedProduct.imageUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success btn-sm">Save</button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={setUpdate}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default OneProduct;
*/ 