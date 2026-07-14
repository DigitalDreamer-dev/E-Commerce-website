import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page">
      {/* LEFT SECTION */}
      <div className="cart-left">
        {cart.length === 0 ? (
          <div className="empty-cart-container">
            <h1 className="empty-cart-heading">🛒 Shopping Cart</h1>

            <div className="empty-cart-card">
              <h2>Your cart is empty.</h2>

              <p>Add some amazing products to get started!</p>

              <button
                className="continue-btn"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>Shopping Cart</h1>

            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <div className="item-details">
                  <h3>{item.title}</h3>

                  <p>
                    <strong>Price:</strong> ${item.price}
                  </p>

                  <p>
                    <strong>Total:</strong> $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      {/* ORDER SUMMARY */}
      {cart.length > 0 && (
        <div className="summary">
          <h2>Order Summary</h2>

          <hr />

          <p>
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </p>

          <p>
            <span>Shipping</span>
            <span>Free</span>
          </p>

          <p>
            <span>Tax</span>
            <span>${(total * 0.05).toFixed(2)}</span>
          </p>

          <hr />

          <h3>Total: ${(total * 1.05).toFixed(2)}</h3>

          <button className="continue-btn" onClick={() => navigate("/shop")}>
            Continue Shopping
          </button>

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}

export default Cart;
