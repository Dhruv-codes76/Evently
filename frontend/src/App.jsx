import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NewEvent from "./pages/NewEvent";
import Home from "./pages/Home";
import PublicEvent from "./pages/PublicEvent";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event/:id" element={<PublicEvent />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-event"
          element={
            <ProtectedRoute>
              <NewEvent />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
