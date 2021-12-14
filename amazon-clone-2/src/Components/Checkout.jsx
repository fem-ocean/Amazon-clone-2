import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import './../Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
                    alt="adbanner"
                />

                <div>
                    
                    <h3>
                        Hello, {user? user?.email : "Guest"}
                    </h3>

                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>


                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                
                    {/* basketItem */}
                    {/* basketItem */}
                    {/* basketItem */}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />                
            </div>
        </div>
    )
}

export default Checkout
