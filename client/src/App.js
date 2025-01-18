import React,{useState,useEffect}from 'react'
import axios from 'axios'
import './App.css';
import ListProducts from './components/ListProducts';
import Navbar from './components/Navbar';

function App() {
const [data,setData]=useState()

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
useEffect(()=>{
fetchData()
},[])

  return (
    <div className="App">
    < Navbar />
    <div style={{ paddingTop: '80px' }}> 
     <ListProducts sample={data}  />
     </div>
    </div>
  );
}

export default App;
