import React from 'react'
import Modal from '../../Uis/Modal'
import { useState } from 'react'
import "./cart.css"
const Cart = (props) => {
    
  return (
    <div className='cart'
    onClick={props.onclick}>
        <span>🛒</span>
        <span>your-cart</span>
        <span className='quantity'>1</span>
    </div>
  )
}

export default Cart