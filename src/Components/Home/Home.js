import React from 'react';
import './home.css';
import Product from '../products/Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/61u8LG1w3mL._SX3000_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title="Samsung FT45 Series 24-Inch FHD 1080p Computer Monitor, 75Hz, IPS Panel, HDMI, USB Hub, Height Adjustable Stand, 3 Yr WRNTY (LF24T452FQNXGO)"
                        price={244}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/91eW1QmtBSL._AC_SX679_.jpg"
                    />
                    <Product
                        id="2"
                        title="LG 34WN80C-B UltraWide Monitor 34” 21:9 Curved WQHD (3440 x 1440) IPS Display, USB Type-C (60W PD) , sRGB 99% Color Gamut, 3-Side Virtually Borderless Design, Tilt/Height Adjustable Stand - Black"
                        price={549}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title="Apple AirPods (2nd Generation)"
                        price={109}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX522_.jpg"
                    />

                    <Product
                        id="4"
                        title="Apple Magic Mouse (Wireless, Rechargable) - White Multi-Touch Surface"
                        price={139.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/513H49gKsjL._AC_SY500_.jpg"
                    />
                    <Product
                        id="5"
                        title="Apple AirPods Max - Pink"
                        price={449}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81NIpE9-5mL._AC_SX522_.jpg"
                    />
                </div>
                <div className="home__row dd">
                    <Product
                        id="6"
                        title='POLY & BARK Calle 75" Apartment Sofa in Full-Grain Pure-Aniline Italian Leather, Cognac Tan/Black'
                        price={1899}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81oG8RvsBrL._AC_SL1500_.jpg"
                    />jpg
                </div>
                <div className="home__row">
                    <Product
                        id="7"
                        title="Sunny Health & Fitness SF-T1407M Foldable Manual Walking Treadmill, Gray"
                        price={157}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71sA4KY5zfL._AC_SX679_.jpg"
                    />
                    <Product
                        id="8"
                        title="Lifepro Folding Exercise Bike - Top Foldable Indoor Stationary Bike - Fitness and Exercise Equipment - Perfect Home Gym Bike"
                        price={199}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/614pLq9CZ7L._AC_SX679_.jpg"
                    />
                    <Product
                        id="9"
                        title="SPECSTAR Adjustable Power Rack, Multi-Function Squat Stand with Pull Up Bar and J-Hooks for Home and Gym"
                        price={239}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/714ZLnjyujL._AC_SX679_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

// // https://m.media-amazon.com/images/I/61IaWdcSfjL._SX3000_.jpg
// //https://m.media-amazon.com/images/I/61g4qanaPoL._SX3740_.jpg
// //https://m.media-amazon.com/images/I/61u8LG1w3mL._SX3000_.jpg
// //https://m.media-amazon.com/images/I/61+TYtQJxeL._SX3000_.jpg