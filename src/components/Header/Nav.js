import React, { useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./nav.css"
import Cart from '../Cart/Cart'
import {LoginContext} from "../Login/AuthContext"
import { useContext } from 'react'
const Nav = (props) => {
  const[active,setActive]=useState(false);
  const [navActive,SetNavActive]=useState("#");
   const[screenSize,setScreenSize]=useState(currentWidth());
   const ctx=useContext(LoginContext);

  const toogle=()=>{
    setActive(prev => !prev);

  }
  function currentWidth(){
    return {
      width:window.innerWidth,
    }
   }

   useEffect(()=>{
    const updatedWidth=()=>{
      setScreenSize(currentWidth())
    }
    window.addEventListener('resize',updatedWidth);
     if(screenSize.width>=600){
      setActive(false);

    }
    // console.log('width',screenSize)
   

    return (()=>{
      window.removeEventListener('resize',updatedWidth)
    })

   },[screenSize]);

    useEffect(()=>{
    setActive(false)
   },[navActive])


   const LogoutHandler=()=>{
    SetNavActive('#')
ctx.logout()

   }
  return (
    <div className='nav_container'>
     <div className='container nav_maincontainer'>
   
        <h2>Ecommerce</h2>
        <ul className={active?"activee":"inactive"}>
            <li  onClick={()=>SetNavActive("#")}
   className={navActive==="#"?'active':''}><Link to="home">home</Link></li>
             <li  onClick={()=>SetNavActive("products")}
   className={navActive==="products"?'active':''}> <Link to="products">Products</Link></li>
            <li  onClick={()=>SetNavActive("about")}
   className={navActive==="about"?'active':''}><Link to="about">About</Link> </li>
             <li  onClick={()=>SetNavActive("contact")}
   className={navActive==="contact"?'active':''}><Link to="contact">contact</Link></li>
             <li  onClick={()=>SetNavActive("login")}
   className={navActive==="login"?'active':''}><Link to="login">Login</Link></li>
   {ctx.isLoggedIn && <li className=''
   onClick={LogoutHandler}
   ><Link to="">Logout</Link></li>}

        </ul>
        <div className='cart'
        ><Cart onclick={props.onclick}/></div>
       {
        !active ? <div className="toggle"
        onClick={toogle}>
          <div></div>
          <div></div>
          <div></div>
        </div>: <div className='close'  onClick={toogle}>X</div>
       } 
    </div>
    </div>
  )
}

export default Nav