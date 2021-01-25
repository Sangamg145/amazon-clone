import React from 'react'
import './App.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';
function ProductCheckout1({price ,total}) {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className='product2'>
 <CurrencyFormat
 renderText={(value)=>(
     <p>
         subtotal ({basket.length} item):<br /><small className='rupay'>₹</small><strong>{getBasketTotal(basket)}</strong>
     </p>
 )}
 decimalScale={2}
 value={getBasketTotal(basket)}
 displayType={'text'}
 thousandSeparator={true}
 prefix={"₹"}
   />
        </div>
    )
}

export default ProductCheckout1;
