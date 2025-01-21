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
const [data,setData]=useState([])
const [uniqueCategories,setCategories]=useState([])
const [view, setView]=useState('Home')
const [selectProduct, setSelectProduct]=useState(null)
const [selectCategory ,setSelectCategory]=useState('')
const [query,setQuery]=useState('')

const fetchData=async()=>{
  try {
    const products = await axios.get('http://localhost:4999/api/product/')
    console.log('main dataaaaaaaaaa',products.data);

    
    if(!products){
      console.log('no data to fetch')
      
    }
    setData(products.data)
    
    const uniqueCategories =[...new Set(products.data.map(product => product.categories))]
   setCategories(uniqueCategories)
    console.log('categories in apppppppppppppppppppppppppppppp',uniqueCategories);
    

  } catch (error) {
    console.error('error',error)
  }
}

  const filteredProducts = selectCategory ? data.filter(product => product.categories === selectCategory): data;
  const filteredProductsbar =data.filter((element)=>(element.name.toLowerCase().includes(query.toLowerCase())))
const handleUpdate=async (id , product)=>{
  try {
     await axios.put(`http://localhost:4999/api/product/${id}`,product)
     fetchData()
     setView('products')

  } catch (error) {
    console.error(error,'error')
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
    < Navbar setView={setView}   uniqueCategories={uniqueCategories} setSelectCategory={setSelectCategory} setQuery={setQuery}/> 
    <div style={{ paddingTop: '80px' }}> 

     {view=== 'products' && <ListProducts  handleUpdate={handleUpdate} filteredProductsbar={filteredProductsbar} filteredProducts={ filteredProducts}  setSelectProduct={setSelectProduct} setView={setView} />}
     {view=== 'Home' && <Home setView={setView}/>}
     {view==='product details'&& <ProductDetails product={selectProduct} setView={setView} />}
     {view==='contact'&&  < Contact />}
     {view==='add Product' &&<  AddProduct   HandleaddProduct={HandleaddProduct}  setView={setView}/>}
     </div>
    </div>
  );
}

export default App;
