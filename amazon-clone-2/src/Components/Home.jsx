import React from 'react';
import './../Home.css';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Product from './Product';

function Home   () {
    return (
        <div className="home">
            <div className="home__container">
                
                <img 
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg" 
                    // https://m.media-amazon.com/images/I/51jljUCi27L._SX3000_.jpg
                    // https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg
                    // https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg
                    // https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg
                    // https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg
                    // https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg
                    alt="home_image"
                    id="home_image"
                />

                <div className="home__row">
                    <Product 
                        id = "1"
                        title="Zero to One: Notes on Startups, or How to Build the Future
                        by Peter Thiel, Blake Masters, et al."
                        image="https://fourminutebooks.com/wp-content/uploads/2016/06/best-motivational-books-29-678x1024.jpg"
                        price={25.99}
                        rating={5}
                    />
                    <Product 
                        id= "2"
                        title= "Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
                        image= "https://m.media-amazon.com/images/I/61kwRNPtMpL._AC_UL320_.jpg"
                        price= {399.50}
                        rating = {5}
                    />
                    <Product 
                        id = "3"
                        title = "Fitness Tracker with Heart Rate Monitor, Fitpolo Smart Watch 1.3 inches Color Touch Screen IP68 Waterproof Step Calorie Counter Sleep Monitoring Pedometer"
                        image = "https://m.media-amazon.com/images/I/61h8lcXTyeL._AC_UY218_.jpg"
                        price = {39.99}
                        rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "4"
                        title = "Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote"
                        image = "https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL320_.jpg"
                        price = {29.99}
                        rating = {4}
                    />
                    <Product 
                        id = "5"
                        title = "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging"
                        image = "https://m.media-amazon.com/images/I/71gtHnQGfQL._AC_UL320_.jpg"
                        price = {32.99}
                        rating = {4}
                    />
                    <Product 
                        id = "6"
                        title = "Seagate Portable 2TB External Hard Drive Portable HDD USB 3.0 for PC, Mac, PlayStation, & Xbox"
                        image = "https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
                        price = {59.99}
                        rating = {3}
                    />
                    <Product 
                        id = "7"
                        title = "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones"
                        image = "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL320_.jpg"
                        price = {49.99}
                        rating = {2}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "8"
                        title = "Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD Display."
                        image = "https://m.media-amazon.com/images/I/71m03KItMZL._AC_UL320_.jpg"
                        price = {797.68}
                        rating = {4}
                    />
                    <Product 
                        id = "9"
                        title = "Gaming Keyboard RGB Wired Customized Backlit, 9 Dedicate Multimedia Keys, Full Size Keyboard with Ergonomic Wrist Rest"
                        image = "https://m.media-amazon.com/images/I/71GFwqX+wgL._AC_UL320_.jpg"
                        price = {39.99}
                        rating = {3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "10"
                        title = "SAMSUNG 32-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN32Q60AAFXZA, 2021 Model) Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model)"
                        image = "https://m.media-amazon.com/images/I/71G6eW8H8hL._AC_UL320_.jpg"
                        price = {497.99}
                        rating = {5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "11"
                        title = "Nike Womens Pullover Fleece Hoodie great for sports, relaxation, casual wear"
                        image = "https://m.media-amazon.com/images/I/51c17snvL8L._AC_UL320_.jpg"
                        price = {59.99}
                        rating = {4}
                    />
                    <Product 
                        id = "12"
                        title = "MEROKEETY Women's Plaid Sherpa Fleece Zip Sweatshirt Long Sleeve Pullover Jacket"
                        image = "https://m.media-amazon.com/images/I/71mPEFG1vhL._AC_UL320_.jpg"
                        price = {45.99}
                        rating = {4}
                    />
                    <Product 
                        id = "13"
                        title = "Champion Women's Reverse Weave Hoodie, Left Chest C. Women comfort and casual wear"
                        image = "https://m.media-amazon.com/images/I/81xeiXU3xlL._AC_SX615_SY462_.jpg"
                        price = {45.85}
                        rating = {4}
                    />
                    <Product 
                        id = "14"
                        title = "I Make Shoecontact I Streetwear Sport Shoes Fashion Sneakers Pullover Hoodie"
                        image = "https://m.media-amazon.com/images/I/71bVDsg38yL._AC_UL320_.jpg"
                        price = {34.99}
                        rating = {3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "15"
                        title = "Remote Control for Samsung-TV-Remote All Samsung LCD LED HDTV 3D Smart TVs Models. Remote control for your comfort. Suitable to use at home and offices"
                        image = "https://m.media-amazon.com/images/I/71bC3-GcU7S._AC_UL320_.jpg"
                        price = {12.99}
                        rating = {5}
                    />
                    <Product 
                        id = "150"
                        title = "Original Nintendo Switch Pro Controller. Extra durable features for maximum fun with your friends and Family"
                        image = "https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UL320_.jpg"
                        price = {69.99}
                        rating = {5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "16"
                        title = "Minney Ceiling Fan with Light, 22 inches Semi Flush Mount Enclosed Shell, Fully Dimmable LED Lighting Caged Ceiling Fan with Remote Control for Low Profile Room.Comfortable experience: Brand: Minney. Combines the advantages of ceiling fans and ceiling lamps. Save space and save money!!!"
                        image = "https://m.media-amazon.com/images/I/61FoQIlXiQL._AC_UL320_.jpg"
                        price = {179.99}
                        rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "17"
                        title = "Ripple Junction Playstation Adult Unisex Color Logo Dad Hat Black"
                        image = "https://m.media-amazon.com/images/I/51LY8O6ay2L._AC_UL320_.jpg"
                        price = {20.29}
                        rating = {5}
                    />
                    <Product 
                        id = "18"
                        title = "PopCrew Gaming Hats | Funny Video Gamer Gifts Accessories for Men Women Kids"
                        image = "https://m.media-amazon.com/images/I/51c0b2fkCFL._AC_UL320_.jpg"
                        price = {15.99}
                        rating = {5}
                    />
                    <Product 
                        id = "19"
                        title = "X-Box 3D Embroidered Logo Snapback Hat Adult unisex color for Men Women Children"
                        image = "https://m.media-amazon.com/images/I/71RGVlHLgfL._AC_UL320_.jpg"
                        price = {20}
                        rating = {5}
                    />
                    <Product 
                        id = "20"
                        title = "HyperX Cloud Stinger – Gaming Headset, Lightweight, Comfortable Memory Foam, Swivel to Mute Noise"
                        image = "https://m.media-amazon.com/images/I/51kxIEmO+ZL._AC_UL320_.jpg"
                        price = {29.99}
                        rating = {3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "21"
                        title = "Exercises to Grow Your Booty From Home: 17 of the Most Effective Glute Workouts. Lose Weight, Gain Curves"
                        image = "https://m.media-amazon.com/images/I/81EXHfVDfAL._AC_UL320_.jpg"
                        price = {12}
                        rating = {3}
                    />
                    <Product 
                        id = "210"
                        title = "The Green Witch: Your Complete Guide to the Natural Magic of Herbs, Flowers, Essential Oils, and More"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51c865AnZDL._SX360_BO1,204,203,200_.jpg"
                        price = {8.20}
                        rating = {5}
                    />
                    <Product 
                        id = "211"
                        title = "Untamed by Glennon Doyle. Over one million copies sold. Number one New York Times Bestseller"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51mwvkRIYgL._SX329_BO1,204,203,200_.jpg"
                        price = {16.73}
                        rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "22"
                        title = "Weighted Exercise Hoop for Adults with Cordless Jump Rope, 3 Pack Aerobic Sports Equipment, Non-Fall, Easy to Spin, Adjustable Size"
                        image = "https://m.media-amazon.com/images/I/814fIXR94cL._AC_UL320_.jpg"
                        price = {39.99}
                        rating = {3}
                    />
                    <Product 
                        id = "220"
                        title = "Bowflex SelectTech 552 Adjustable Dumbbell. 25/55lb Single Dumbbell for Men and Women with Anti-Slip Metal Handle,Fast Adjust Weight"
                        image = "https://m.media-amazon.com/images/I/51ZrS1jL7WL._AC_UL320_.jpg"
                        price = {373.65}
                        rating = {5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "23"
                        title = "Soda Single Lug Sole Chunky Heel Combat Ankle Boot Lace up w/Side Zipper"
                        image = "https://m.media-amazon.com/images/I/71ZIMf4bYIL._AC_UL320_.jpg"
                        price = {49.99}
                        rating = {4}
                    />
                    <Product 
                        id = "24"
                        title = "Skechers Women's D'Lites Memory Foam Lace-up Sneaker"
                        image = "https://m.media-amazon.com/images/I/61Wv3-8FsYL._AC_UL320_.jpg"
                        price = {55}
                        rating = {5}
                    />
                    <Product 
                        id = "25"
                        title = "Nike Men's Air Monarch IV Cross Trainer"
                        image = "https://m.media-amazon.com/images/I/61dMj+mPSXL._AC_UL320_.jpg"
                        price = {70}
                        rating = {4}
                    />
                    <Product 
                        id = "26"
                        title = "APRILSPRING Women Walking Running Shoes Fashion Sports Non-Slip Shoes"
                        image = "https://m.media-amazon.com/images/I/71emta6fVqL._AC_UL320_.jpg"
                        price = {28.99}
                        rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id = "27"
                        title = "Ablanczoom Womens Walking Shoes Sock Sneakers Comfortable Mesh Wedges Platform Shoe Slip On Air Cushion Running Tennis Shoes. Shock cushion and sprint shoe. Walking and running shoes with great comfort"
                        image = "https://m.media-amazon.com/images/I/81arRTsLAWL._AC_UL320_.jpg"
                        price = {23.77}
                        rating = {4}
                    />
                </div>

                <BackToTop />

                <Footer />
                
            </div>
        </div>
    )
}

export default Home;
