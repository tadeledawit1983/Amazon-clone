import React from 'react';
import './product.css';
import { useStateValue } from '../StateProvider';
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    //   console.log('this is the basket', basket);
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <img src={image} alt="" />

            <div className="product__info">
                <span>{title}</span>
                <span className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </span>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i}>⭐️</span>
                        ))}
                </div>

                <button className="product__button" onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;