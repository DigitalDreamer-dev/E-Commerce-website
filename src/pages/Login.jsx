import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login();

    navigate("/checkout");
  };

  return (
    <section className="login-container">
      <div className="login-overlay">
        <div className="glass-card">
          <h1>Welcome Back</h1>

          <p>Login as Guest to continue shopping.</p>

          <button className="login-btn" onClick={handleLogin}>
            Login as Guest
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
