import React from 'react';
import amazon1 from './amazon1.png';
import './App.css';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';


function Header() {
  const [{basket}]=useStateValue();
  return (
    <div className='header'>
        <Link to="/">
     <img src={amazon1} className='imgi' alt='img'/>
     </Link>
      <input className='inp' />
    <div className='iconn'>
    <i  className="fas fa-search"></i>
    </div>
<div className='header1'>
<div className='ss'>
<Link to="/login" className='aaa'>
  <span className='spn'>Hello,</span>
  <h5 >{'\nSignin'}</h5>
  </Link>
</div>
<div className='ss'>
<Link to="/return" className='aaa'> 
<span className='spn'>Returns</span>
  <h5>& Orders</h5>
  </Link>
</div>
    <div className='iconn1' >
    <Link to="/checkout" className='aaa'> 
    <i className="fas fa-cart-arrow-down"></i>
  </Link>
  <span className='spn'>{basket?.length}</span>
    </div>
    </div>
        </div>
  );
}

export default Header;
