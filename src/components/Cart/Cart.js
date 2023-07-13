import React,{useContext} from 'react'
import Modal from '../../Uis/Modal'
import { useState } from 'react'
import "./cart.css"
import Context from '../Context/Context'
const Cart = (props) => {
  const ctx=useContext(Context);
  let quantity=0;

    ctx.items.forEach((i)=>quantity+=i.quantity)
  return (
    <div className='cart'
    onClick={props.onclick}>
        <span>🛒</span>
        <span>items</span>
        <span className='quantity'>{quantity}</span>
    </div>
  )
}

export default Cart