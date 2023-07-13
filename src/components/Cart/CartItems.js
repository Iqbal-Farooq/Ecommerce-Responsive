import React from 'react'
import Modal from '../../Uis/Modal'
import Context from '../Context/Context'
import { useContext } from 'react'
import './cart.css'

const CartItems = (props) => {
    const Ctx=useContext(Context);
    console.log("jj",Ctx.items);
  return (
    <Modal onclick={props.onclick}>
  <div className='cart_maincontainer'>

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
            q  {item.quantity}
           </div>

           <button
           onClick={()=>Ctx.addItem(item)} className='btn btn-primary'>+</button>
           <button
            onClick={()=>Ctx.removeItem(item)}
            className='btn btn-primary'>-</button>
           

        </div>
       })} 
       </div>
    </Modal>
  )
}

export default CartItems