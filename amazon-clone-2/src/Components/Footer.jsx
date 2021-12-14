import React from 'react';
import './../Footer.css';

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer">
                
                <div className='footer__sectionOne'>
                    <p className="footer__first">Get to Know Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                </div>

                <div className="spacing"></div>

                <div className="footer__sectionTwo">
                    <p className="footer__first">Make Money with Us</p>
                    <p>Sell Products on Amazon</p>
                    <p>Sell on Amazon Business</p>
                    <p>Sell Apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>See More Make Money with Us</p>
                </div>

                <div className="spacing"></div>

                <div className="footer__sectionThree">
                    <p className="footer__first">Amazon Payment Products</p>
                    <p>Amazon Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload your Balance</p>
                    <p>Amazon Currency Converter</p>
                </div>

                <div className="spacing"></div>


                <div className="footer__sectionFour">
                    <p className="footer__first">Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage your Content and Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>

            </div>

            <img 
                    className="footer__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazonLogo"
            />

        </div>
        
    )
}

export default Footer
