import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import toast from "react-hot-toast";

export default function Dashboard() {
  const { logout } = useAuth();
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const url =
        filter === "all" ? "/events" : `/events?filter=${filter}`;
      const res = await api.get(url);
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [filter]);

  return (
    <div className="min-h-screen bg-background px-2 py-10 sm:px-6 md:px-12 lg:px-32">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12 gap-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-textPrimary">My Events</h1>
      </div>

      <div className="mb-12 flex flex-wrap gap-4 justify-center sm:justify-start">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-full shadow-sm border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary ${
            filter === "all"
              ? "bg-primary text-white"
              : "bg-gray-200 text-textSecondary border-gray-200 hover:bg-gray-100"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("upcoming")}
          className={`px-5 py-2 rounded-full shadow-sm border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary ${
            filter === "upcoming"
              ? "bg-primary text-white"
              : "bg-gray-200 text-textSecondary border-gray-200 hover:bg-gray-100"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter("past")}
          className={`px-5 py-2 rounded-full shadow-sm border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary ${
            filter === "past"
              ? "bg-primary text-white"
              : "bg-gray-200 text-textSecondary border-gray-200 hover:bg-gray-100"
          }`}
        >
          Past
        </button>
      </div>

      {loading ? (
        <p>Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-gray-600">No events found.</p>
      ) : (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onCopy={async () => {
                try {
                  await navigator.clipboard.writeText(`${window.location.origin}/event/${event.id}`);
                  toast.success("Link copied!");
                } catch {
                  toast.error("Failed to copy link");
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
