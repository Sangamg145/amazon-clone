import React from 'react'
import './App.css';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
function Product({id,title,price,rating,image,buton,buton1}) {
    const [{basket},dispatch]=useStateValue();
    const AddToCart=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item : {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating

            }
        })
    }
    const Buynow=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item : {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating

            }
        })
    }
    return (
        <div className='product'>
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
       <img src={image} alt="im" className='prod_image'/>

    </div>
    <div className='cartbtn'>
    <button className='buton' onClick={AddToCart}><p>{buton}</p></button>
    <Link to="/checkout" className='aaa'> 
    <button onClick={Buynow} className='buton1'><p>{buton1}</p></button>
  </Link>
    
    </div>
<div>
</div>
            
        </div>
    )
}

export default Product
