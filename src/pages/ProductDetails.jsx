import { useEffect, useState, useContext } from "react";

import { getProductById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCart = () => {
    if (!product) return;
    const alreadyInCart = cart.find((item) => item.id === product.id);

    if (alreadyInCart) {
      navigate("/cart");
      return;
    }

    addToCart(product);

    setMessage("✅ Item added to cart!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="product-details">
      <div className="details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="details-content">
        <h1>{product.title}</h1>

        <h3>{product.brand}</h3>

        <p>{product.description}</p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>⭐ {product.rating}</p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <h2>${product.price}</h2>

        <button className="cart-btn" onClick={handleCart}>
          {cart.some((item) => item.id === product.id)
            ? "Go to Cart"
            : "Add to Cart"}
        </button>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}

export default ProductDetails;
