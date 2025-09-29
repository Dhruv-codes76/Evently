import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function Navbar({ currentPath }) {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-lg px-4 sm:px-7 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 bg-gray-150">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link to="/" className="flex items-center text-2xl font-bold text-primary mx-2 sm:mx-5 whitespace-nowrap gap-2">
          {/* Material UI EventNote icon on the left */}
          <EventNoteIcon sx={{ fontSize: 32, color: '#7c3aed', marginRight: '4px' }} />
          <span>Evently</span>
        </Link>
      </div>

      {token ? (
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center w-full sm:w-auto gap-2 sm:gap-0">
          {currentPath !== "/dashboard" && (
            <Link
              to="/dashboard"
              className="text-textSecondary hover:text-primary font-medium mx-2 sm:mx-4 whitespace-nowrap"
            >
              Dashboard
            </Link>
          )}
          <Button
            variant="primary"
            className="min-w-[110px] px-3 py-1.5 bg-primary hover:bg-accent text-white mx-2 sm:mx-4 rounded-2xl whitespace-nowrap"
            onClick={() => navigate('/new-event')}
            type="button"
          >
            <span className="mr-1">+</span>Add Event
          </Button>
          <Button
            variant="danger"
            className="w-24 px-1 py-1.5 bg-red-600 hover:bg-red-700 text-white mx-2 sm:mx-4 rounded-3xl whitespace-nowrap"
            onClick={() => {
              logout();
              navigate("/");
            }}
            type="button"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center w-full sm:w-auto gap-2 sm:gap-0">
          <Link
            to="/login"
            className="text-gray-600 hover:text-primary font-medium mx-2 sm:mx-4 whitespace-nowrap"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-50 px-2 text-base rounded-2xl font-semibold pt-1 pb-1 text-gray-50 bg-primary font-medium border-1 border-gray-50 mx-2 sm:mx-4 whitespace-nowrap"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
