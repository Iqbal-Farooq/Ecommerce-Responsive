import Home from './components/Homee/Home';
import Header from './components/Header/Header';
import Contact from "./components/contact/Contact"
import './App.css';
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartItems from './components/Cart/CartItems';


function App() {
  const[showCart,setShowcart]=useState(false);
  const CartHandler=()=>{

    setShowcart(prev => !prev);
    console.log(showCart);
  }

  
  return (<>
  {showCart &&<CartItems onclick={CartHandler}/>}
  <Header onclick={CartHandler}/>
  
  <Routes>
   <Route path='' exact element={ <Home />}/>
    <Route path='home' exact element={ <Home />}/>
    <Route path='about' exact element={<About/>}/>
    <Route path='contact' exact element={<Contact/>}/>
     <Route path='login' exact element={<Login/>}/>
     <Route path='products' exact element={<Products/>}/>
    
    
  </Routes>
  
 
  <Footer />
  
   </>
  );
}

export default App;
