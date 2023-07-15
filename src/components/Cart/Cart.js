import React,{useContext} from 'react'
import Modal from '../../Uis/Modal'
import { useState } from 'react'
import "./cart.css"
 import { LoginContext } from '../Login/AuthContext'
import Context from '../Context/Context'
const Cart = (props) => {
 
  const ctx=useContext(Context);
  const Loginctx=useContext(LoginContext);
  let quantity=0;

    ctx.items.forEach((i)=>quantity+=i.quantity)

    const cartHandler=()=>{
      if(!Loginctx.isLoggedIn){
        alert("Plz login first")
      }

    }
  return (
    <div  className='cart'
    onClick={props.onclick}>
        <span>🛒</span>
        <span onClick={cartHandler}>items</span>
        <span className='quantity'>{quantity}</span>
    </div>
  )
}

export default Cart