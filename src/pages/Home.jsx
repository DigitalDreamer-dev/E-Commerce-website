import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to E-Commerce Store</h1>

          <p>Discover amazing products at affordable prices.</p>

          <button className="shop-btn" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
