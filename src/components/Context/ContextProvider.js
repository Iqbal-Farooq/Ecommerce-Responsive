import React from 'react'
import Context from './Context'
import { useContext } from 'react'
import { useState } from 'react'

const ContextProvider = (props) => {
    const ctx=useContext(Context);
    const [items,setItems]=useState([]);

    
    const add=(item)=>{
        const exist=items.findIndex((items)=> items.id === item.id);
        console.log(exist);
         let updatedItems;
        if(exist>=0){
              const  existItem=items[exist];
        // console.log(existItem, " qty");
            const updateditem={...existItem,quantity:Number(existItem.quantity)+1}
            updatedItems=[...items] ;
            updatedItems[exist]=updateditem;

        }
        else{
            updatedItems=[...items,{...item,quantity:1}]

        }
        setItems(updatedItems);


    }
const removeHandler=(item)=>{
    const existIndx=items.findIndex((i)=>i.id ===item.id);
    const existItem=items[existIndx];
    console.log(existItem.quantity," quant");
    let updatedItem;
    let qnt=Number(existItem.quantity)
    if(qnt>1){
        const itemtobeupdated={...existItem,quantity:Number(existItem.quantity)-1};
        console.log(itemtobeupdated);
      updatedItem=[...items];
      updatedItem[existIndx]=itemtobeupdated;
    }else{
        updatedItem=items.filter((i)=>i.id !== item.id)
    }
   

 setItems(updatedItem);
}
    const contextdata={
        items:items,
          totalAmount:0,
         addItem:add,
            
          removeItem:removeHandler,
}
  return (
    <Context.Provider value={contextdata}>{props.children}</Context.Provider>
  )
}

export default ContextProvider