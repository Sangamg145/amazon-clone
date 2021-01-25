import React from 'react'
import './App.css';
import { useStateValue } from './StateProvider';
function ProductCheckout({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue()
    const removeCart=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
                id:id,
        })
    }
    return (
        <div className='product1'>
            <div >
            <img src={image} alt='gfh'  className='prod_image1'/>
            </div>
            <p className='product_title'>{title}</p>
            <small>₹</small>
    <strong>{price}</strong>
    <div className='rating'>
   
       {
           Array(rating)
           .fill()
           .map((_)=>(
               <p>🌟</p>
           ))
       }
        </div>
        <input type='button'  onClick={removeCart} className='buton2' value='Remove From Cart'></input >
        </div>
    )
}

export default ProductCheckout;
