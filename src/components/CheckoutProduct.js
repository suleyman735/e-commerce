import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
heelo
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>20</strong>
            </p>
            <div className="checkoutProduct__rating">
                ***

            </div>
            <button> Remove from basket</button>
        </div>

</div>
  )
}

export default CheckoutProduct