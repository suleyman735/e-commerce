import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider';

function Products({id,title,image,price,rating}) {

  const [ state,dispatch] = useStateValue()

  const addToBasket =()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:id,
        image:image,
        price:price,
        rating:rating,
  
  
      }
    })

  }



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
            <button onClick={addToBasket}>Add to basket</button>
        </div>

   
  )
}

export default Products