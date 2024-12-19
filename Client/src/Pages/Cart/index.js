import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "All Natural Italian-Style Chicken Meatballs",
            price: 15.0,
            quantity: 2,
            image:
                "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
        },
        {
            id: 2,
            name: "Organic Mixed Vegetables",
            price: 12.0,
            quantity: 1,
            image:
                "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-10-346x310.jpg",
        },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page mt-4">
            <h1 className="mb-0">Your Cart</h1>
            <p>There are <b>3</b> products in your cart</p>
            {cartItems.length > 0 ? (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="cart-table">
                                    <div className="cart-header">
                                        <span>Product</span>
                                        <span>Price</span>
                                        <span>Quantity</span>
                                        <span>Subtotal</span>
                                        <span>Action</span>
                                    </div>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="cart-item">
                                            <div className="cart-item-product">
                                                <img src={item.image} alt={item.name} />
                                                <span>{item.name}</span>
                                            </div>
                                            <span className="cart-item-price">${item.price.toFixed(2)}</span>
                                            <div className="cart-item-quantity">
                                                <button onClick={() => handleQuantityChange(item.id, -1)}>
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item.id, 1)}>
                                                    +
                                                </button>
                                            </div>
                                            <span className="cart-item-subtotal">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <button
                                                className="cart-item-remove"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="cart-summary">
                                    <h3>Cart Summary</h3>
                                    <hr/>
                                    <div className="summary-details">
                                        <span>Subtotal:</span>
                                        <span>${calculateTotal().toFixed(2)}</span>
                                    </div>
                                    
                                    <div className="summary-details">
                                        <span>Shipping:</span>
                                        <span>Free</span>
                                    </div>
                                    
                                    <div className="summary-details">
                                        <span>Estimate for:</span>
                                        <span>United Kingdom</span>
                                    </div>
                                    
                                    <div className="summary-details">
                                        <span>Total:</span>
                                        <span>${calculateTotal().toFixed(2)}</span>
                                    </div>
                                    <button className="btn-checkout">Proceed to Checkout &nbsp;<MdOutlineShoppingCartCheckout/></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <div className="empty-cart">
                    <h3>Your cart is empty!</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;