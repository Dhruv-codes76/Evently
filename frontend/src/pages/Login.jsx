import { useState } from "react";
import toast from "react-hot-toast";
import { validateEmail, validatePassword } from "../utils/validators";
import InputField from "../components/InputField";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");
    let valid = true;
    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }
    if (!valid) return;
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
  login(res.data.token);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials. Please try again.");
      } else if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-2">
      <div className="bg-card p-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-xs md:max-w-sm">
        <h2 className="text-3xl font-bold mb-10 text-center text-textPrimary">Login</h2>
        {error && <p className="text-red-500 text-sm mb-5">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            label="Email"
            type="email"
            placeholder={"Email Address"}
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={emailError}
            autoComplete="email"
          />
          <InputField
            label="Password"
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={passwordError}
            autoComplete="current-password"
          />
          <Button
            variant="primary"
            className="w-full py-2 text-base font-semibold mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? <Spinner size={22} /> : "Login"}
          </Button>
        </form>
        <div className="mt-8 text-center text-sm text-textSecondary">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-semibold hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
