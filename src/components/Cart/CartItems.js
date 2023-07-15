import React from 'react'
import Modal from '../../Uis/Modal'
import Context from '../Context/Context'
import { useContext } from 'react'
import './cart.css'

const CartItems = (props) => {
    const Ctx=useContext(Context);
    // console.log("jj",Ctx.items);
    let result=0;
    Ctx.items.forEach((item)=>{
      result+=item.price*item.quantity;

    })
    let total=result.toFixed(2);

  return (
    <Modal onclick={props.onclick}>
  <div className='cart_maincontainer'>
  <div className='cart_header'>
  <h2>cart data</h2>
  <button onClick={props.onclick} className='btn  btn-primary '>x</button>


  </div>
  
       {Ctx.items.map((item)=>{return <div className='cart_container'>
              <div className="image">
              <img src={item.image} alt='' />

           </div>
           <div className="title">
           {item.title}


           </div>
           <div className="price">
             <span>
           ₹ </span> {item.price}
           </div>

           <div className="quantity">
           <span className='x'>x </span>
              {item.quantity}
           </div>

           <button
           onClick={()=>Ctx.addItem(item)} className='btn btn-primary'>+</button>
           <button
            onClick={()=>Ctx.removeItem(item)}
            className='btn btn-primary'>-</button>
           

        </div>
       })}
       <div className='cart_bottom'>
       <h2>total</h2>
       <h2>Rs: {total}</h2>

       </div>
      {
        Ctx.items.length>0 && <div className='order_btn'>
        <button className='btn btn-primary'>order now</button>
       </div>
      } 
       </div>
    </Modal>
  )
}

export default CartItems