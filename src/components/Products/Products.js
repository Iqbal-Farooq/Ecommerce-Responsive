import React, { useEffect, useState,useContext } from 'react'
import "./products.css"
import Context from '../Context/Context';
const Products = () => {
    const[data,SetData]=useState();
    const[render,SetRender]=useState(false);
    const ctx=useContext(Context);
    // https://fakestoreapi.com/products
    //   const res=  fetch('https://dummyjson.com/products')
    useEffect( ()=>{
        async function data(){
  let res=await fetch('https://fakestoreapi.com/products')
  
  if(res.ok){
    let data=await res.json();
     await SetData(data);
   await  SetRender(true);

  }else{
    SetRender(false);
  }
 
  
  // console.log(data);

         
        }
        data()
         
          

    },[])
 
            https://api.escuelajs.co/api/v1/products
            // console.log(res);
  return (
   
    <div className="container product_container">

    {!render && <span class="loader"></span> }
  
   
      {render && Object.keys(data).map((items)=>{return <div className="cards">
      
      
        
        <div className="img">
        <img src={data[items].image} alt="" />

        </div>
        <div className='data'>
         <div className="title">
        {data[items].title}

        </div>
        <div className="group1">
         <div className="dis">
        <span>
          ₹
        </span>
    
       <span> {data[items].price} </span> 

        </div>
          <div className="dis">
          <span>
            Rating  </span>
           <span>
                      {data[items].rating.rate}
          </span>
       

        </div>

        </div>
       
        <button className="btn btn-primary"
        onClick={()=>ctx.addItem(data[items])}>Add To Cart</button>

        </div>
       

        </div>
      })}
    </div>

    
  )
}

export default Products