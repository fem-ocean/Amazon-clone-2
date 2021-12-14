import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import './../Product.css';


function Product({id, title, image, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    // console.log('this is the basket >>> ', basket)

    const addToBasket = () =>{
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    } ;

    return (
        <div className="product">
            
            <div className="product__info">
                <p>{title}</p>
                <p classname="product__price">
                    <sup><small>$</small></sup>
                    <strong>{price}</strong>
                </p>
                
            </div>

            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_,i)=>(
                    <p>⭐</p>
                ))}                     
            </div>

                        
            <img 
                src={image}
                alt="book for sale"
            />

            {!hideButton && <button onClick={addToBasket} className="product__button">Add to Basket</button>}
            
        </div>
    )
}

export default Product
