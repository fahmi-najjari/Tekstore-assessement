import React, { useState } from "react";
import ProductDetails from "./ProductDetails";


function OneProduct({ el,setSelectProduct,setView, handleUpdate }) {
  const [isDescription, setIsDescription]=useState(false)
  const [isupdate,setIsupdate]=useState(false)
  const [name, setName]=useState(el.name)
  const [price, setPrice]=useState(el.price)
  const [categories, setCategories]=useState(el.categories)
  const [description, setDescription]=useState(el.description)
  const [image ,setImage]=useState(el.imageUrl)
 const updateP= {
  name:name || el.name,
  price: price || el.price,
  categories:categories || el.categories,
  description:description || el.description,
  image:image || el.imageUrl

 }
 
  const handleDescription=()=>{
    setIsDescription(!isDescription)
  }
  const onImageClick=()=>{
    setSelectProduct(el)
    setView('product details')
  }

const confirmUpdate=(e)=>{
  e.preventDefault()
  handleUpdate(el.id,updateP)
  setIsupdate(false)
}

  const setUpdate=()=>{
    setIsupdate(!isupdate)


  }
   return (
    <>

      <div className="card"   style={{ width: '18rem', cursor: 'pointer' }}  >
        
        <img  onClick={onImageClick}  src={el.imageUrl}  className="card-img-top img-fluid d-block" alt={el.name}  style={{ height: "150px", objectFit: "cover" }}  />
       
        <div className="card-body" onClick={handleDescription} >

          <h5 className="card-title">{el.name}</h5>

          <p className="card-text"> {isDescription ? el.description : `${el.description.slice(0, 50)}...`}</p>
          
          <p className="card-text">{el.categories}.</p>
          <p className="card-text">{el.price}.</p>
          <div className="d-flex justify-content-between">
            <button href="#" className="btn btn-primary btn-sm">  Add to cart  </button>
            <button href="#" className="btn btn-primary btn-sm">  delete  </button>
            <button href="#" className="btn btn-primary btn-sm" onClick={setUpdate} >  update </button>
          </div>



        </div>
        {isupdate && <form onSubmit={confirmUpdate} >
          <p> Name:</p>
         < input  type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
         <p> Price:</p>
         < input  type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
         <p> Category:</p>
         < input  type="text" value={categories} onChange={(e)=>setCategories(e.target.value)}/>
         <p> Description:</p>
         < input  type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
         <p> Image:</p>
         <input type="file"  value={image} onChange={(e)=>{setImage(e.target.files[0])}}/>
         <button type="submit"  >submit</button>
          </form >}
      </div>
    </>
  );
}

export default OneProduct;
