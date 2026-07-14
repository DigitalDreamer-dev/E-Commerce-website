import { useNavigate } from "react-router-dom";
import checkoutImg from "../assets/Checkoutbg.png";

function Checkout() {
  const navigate = useNavigate();

  return (
    <section className="checkout-container">
      <div className="checkout-content">
        <h1>🛒 Checkout</h1>

        <p>
          Your order is ready for review.
          <br />
          Click below to continue to your cart.
        </p>

        <button className="checkout-btn" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>

        <img src={checkoutImg} alt="Checkout" className="checkout-image" />
      </div>
    </section>
  );
}

export default Checkout;
