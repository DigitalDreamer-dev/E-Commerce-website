import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p>{product.brand}</p>

      <p>⭐ {product.rating}</p>

      <h2>${product.price}</h2>

      <Link to={`/product/${product.id}`}>
        <button className="view-btn">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
