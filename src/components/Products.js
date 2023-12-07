import React from 'react'
import "./Product.css"

function Products({id,title,image,price,rating}) {
  return (
    
        <div className="product">
            <div className="product__info">
                <p>
                    {title}
                </p>
                <p className='product__price'>${price}</p>
                <div className="product__rating">
                  {Array(rating).fill().map((_,i)=>(
                    <p>*</p>
                  ))}
                </div>
            </div>
            <img src={image} alt="" srcset="" />
            <button>Add to basket</button>
        </div>

   
  )
}

export default Products