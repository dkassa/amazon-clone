import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div className="checkout__title">
                    <h2>Your shopping Basket</h2>
                    {/*BasketItem8*/}
                    {/*BasketItem8*/}
                    {/*BasketItem8*/}
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
                
            </div>
            
        </div>
    )
}

export default Checkout
