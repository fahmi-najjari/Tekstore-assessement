import React, { useState } from 'react'

function AddProduct({HandleaddProduct,setView}) {
    const[name ,setName]=useState('')
    const[description, setDescription]=useState('')
    const[categories,setCategory]=useState('')
    const[price,setPrice]=useState('')
    const[image,setImage]=useState('')

    const handleSubmit=()=>{
       
      const newProduct=  {name,description,categories,price,image}
        HandleaddProduct(newProduct)
        setName('') 
        setDescription('') 
        setCategory('') 
        setPrice('') 
        setImage('')
       
    }

  return (
    <>
<div className="container mt-5">
  <form>
    <div className="mb-3 row">
      <label htmlFor="productName" className="form-label col-sm-3">Product Name</label>
      <div className="col-sm-9">
        <input type="text" className="form-control form-control-sm" id="productName" value={name} onChange={(e) => { setName(e.target.value) }} />
      </div>
    </div>

    <div className="mb-3 row">
      <label htmlFor="productDescription" className="form-label col-sm-3">Description</label>
      <div className="col-sm-9">
        <input type="text" className="form-control form-control-sm" id="productDescription" value={description} onChange={(e) => { setDescription(e.target.value) }} />
      </div>
    </div>

    <div className="mb-3 row">
      <label htmlFor="productPrice" className="form-label col-sm-3">Price</label>
      <div className="col-sm-9">
        <input type="text" className="form-control form-control-sm" id="productPrice" value={price} onChange={(e) => { setPrice(e.target.value) }} />
      </div>
    </div>

    <div className="mb-3 row">
      <label htmlFor="productCategory" className="form-label col-sm-3">Category</label>
      <div className="col-sm-9">
        <input type="text" className="form-control form-control-sm" id="productCategory" value={categories} onChange={(e) => { setCategory(e.target.value) }} />
      </div>
    </div>

    <div className="mb-3 row">
      <label htmlFor="productImage" className="form-label col-sm-3">Image</label>
      <div className="col-sm-9">
        <input type="text" className="form-control form-control-sm" id="productImage" value={image} onChange={(e) => { setImage(e.target.value) }} />
      </div>
    </div>

    <button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
  </form>
</div>

    
    </>
  )
}

export default AddProduct


{/* <div>AddProduct</div>
    <label htmlFor=''>name</label>
    <input  type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    
    
    
    
    <label htmlFor=''>description</label>
    <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
    <label htmlFor=''>price </label>
    <input type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
    <label>category</label>
    <input type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
    <label>image</label>
    <input type='text' value={image} onChange={(e)=>{setImage(e.target.value)}}/>
    <button onClick={handleSubmit}>submit</button>


    </>
 */}