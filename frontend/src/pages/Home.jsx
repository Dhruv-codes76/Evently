import { Link } from "react-router-dom";
import Button from "../components/Button";

// Material UI Icons
import EventIcon from "@mui/icons-material/Event";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShareIcon from "@mui/icons-material/Share";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-accent text-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 px-6 md:pl-12 lg:pl-20 py-8 sm:py-12 md:py-0 min-h-screen md:min-h-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Organize Your Events with Ease
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light text-gray-100 max-w-md">
          Evently makes it simple to add, track, and share events — all in one
          beautiful, modern app.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center md:justify-start">
          <Link to="/signup" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold shadow-lg"
            >
              Get Started
            </Button>
          </Link>
          <Link to="/login" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold shadow-lg"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section (Timeline cards) */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 mb-8 md:mb-0">
        <div className="relative h-[440px] w-[260px] flex items-center justify-center">
          {/* Vertical White Bar */}
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-2 bg-white rounded-full"></div>

          {/* Add Events (top right) */}
          <div className="absolute top-0 right-0 bg-purple-500 rounded-xl flex flex-col items-center p-5 shadow-lg w-40 text-white">
            <EventIcon sx={{ fontSize: 36, color: "white" }} />
            <h3 className="mt-2 text-base font-semibold">Add Events</h3>
          </div>

          {/* Track Events (middle left) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-purple-500 rounded-xl flex flex-col items-center p-5 shadow-lg w-40 text-white">
            <TimelineIcon sx={{ fontSize: 36, color: "white" }} />
            <h3 className="mt-2 text-base font-semibold">Track Events</h3>
          </div>

          {/* Share Events (bottom right) */}
          <div className="absolute bottom-0 right-0 bg-purple-500 rounded-xl flex flex-col items-center p-5 shadow-lg w-40 text-white">
            <ShareIcon sx={{ fontSize: 36, color: "white" }} />
            <h3 className="mt-2 text-base font-semibold">Share Events</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
