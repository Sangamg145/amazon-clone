import React from 'react'
import { useStateValue } from './StateProvider'
import ProductChechout from './ProductCheckout.js'
import ProductChechout1 from './ProductCheckout1.js'
import {Link} from "react-router-dom";
function CheckOut() {
    const [{basket}] = useStateValue();
    return (
        <div>
             <img className='adimg' 
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/bau/Order-checkout_1500x200" />
          
        <div className='checkout1'>
           
            {basket?.length ===0?(
                <div>
                    <h1>Your Cart is Empty</h1>
                    <p>You don't have any item in your cart.
                        Kindly add item to your cart.</p>
                    </div>
            ):(
                <div className='check'>
                    <div>
                    <h2>Your Cart </h2>
                    {basket.map(item=>(
                        <ProductChechout
                        item={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      />  
                    ))}
                    </div>

                        <div className='check1'>
                        {basket.length>0 && (
                        <ProductChechout1
                    
                      />  
                    )}
                    <Link to="/payment">
                    <input type='button' className='btncart' value='Proceed To Checkout'></input>
                         </Link>

                        </div>
                     
                </div>
            
            )
            
            }
      
        </div>
        </div>
    )
}

export default CheckOut
