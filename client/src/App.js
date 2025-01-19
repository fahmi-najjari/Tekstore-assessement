import React,{useState,useEffect}from 'react'
import axios from 'axios'
import './App.css';
import ListProducts from './components/ListProducts';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Contact from './components/Contact';
import AddProduct from './components/AddProduct';

function App() {
const [data,setData]=useState()
const [view, setView]=useState('Home')
const [selectProduct, setSelectProduct]=useState('null')

const fetchData=async()=>{
  try {
    const products = await axios.get('http://localhost:4999/api/product/')
    console.log('main dataaaaaaaaaa',products.data);
    
    if(!products){
      console.log('no data to fetch')
      
    }
    setData(products.data)
  } catch (error) {
    console.error('error',error)
  }
}

const HandleaddProduct= async (newProduct)=>{
  try {
   await axios.post('http://localhost:4999/api/product/',newProduct)
   fetchData()
   setView('products')
   console.log("product added ")
  } catch (error) {
    throw error
  }

}
useEffect(()=>{
fetchData()
},[])

  return (
    <div className="App">
    < Navbar setView={setView}  setSelectProduct={setSelectProduct}  /> 
    <div style={{ paddingTop: '80px' }}> 

     {view=== 'products' && <ListProducts sample={data}  setSelectProduct={setSelectProduct} setView={setView} />}
     {view=== 'Home' && <Home setView={setView}/>}
     {view==='product details'&& <ProductDetails product={selectProduct} setView={setView} />}
     {view==='contact'&&  < Contact />}
     {view==='add Product' &&<  AddProduct   HandleaddProduct={HandleaddProduct}  setView={setView}/>}
     </div>
    </div>
  );
}

export default App;
