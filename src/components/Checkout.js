import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' 
            className='checkout__ad'/>
            <div>
                <h2 className='checkout__title'>
                    Your shopping Basket
                </h2>
                <CheckoutProduct/>
                <CheckoutProduct/>
                <CheckoutProduct/>
            </div>
            
        </div>
        <div className='checkout__right'>
            <Subtotal />

        </div>
    
    </div>
  )
}

export default Checkout