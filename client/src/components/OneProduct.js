import React, { useState } from "react";

function OneProduct({ el }) {
  const [isDescription, setIsDescription]=useState(false)
  const handleDescription=()=>{
    setIsDescription(!isDescription)
  }
  return (
    <>
      <div className="card"   style={{ width: '18rem', cursor: 'pointer' }}  onClick={handleDescription}>
        <img
          src={el.imageUrl}
          className="card-img-top img-fluid d-block"
          alt={el.name}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{el.name}</h5>
          <p className="card-text"> {isDescription ? el.description : `${el.description.slice(0, 50)}...`}</p>
          <p className="card-text">{el.category}.</p>

          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-primary btn-sm">
              Left Button
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              Right Button
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneProduct;
