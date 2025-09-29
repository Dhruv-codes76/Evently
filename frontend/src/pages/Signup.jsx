import { useState } from "react";
import InputField from "../components/InputField";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/api";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }
    if (!valid) return;
    setLoading(true);
    try {
      await api.post("/auth/signup", { email, password });
      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to create account. Try a different email.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
        <div className="min-h-screen flex items-center justify-center bg-background px-2">
          <div className="bg-card p-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-xs md:max-w-sm">
            <h2 className="text-3xl font-bold mb-10 text-center text-textPrimary">Sign Up</h2>
            {error && <p className="text-red-500 text-sm mb-5">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-5">{success}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <InputField
                label="Email"
                placeholder={"Email Address"}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={emailError}
                autoComplete="email"
              />
              <InputField
                label="Password"
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                error={passwordError}
                autoComplete="new-password"
              />
              <Button
                variant="primary"
                className="w-full py-2 text-base font-semibold mt-2"
                type="submit"
                disabled={loading}
              >
                {loading ? <Spinner size={22} /> : "Sign Up"}
              </Button>
            </form>
            <div className="mt-8 text-center text-sm text-textSecondary">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">Login</Link>
            </div>
          </div>
        </div>
  );
}
