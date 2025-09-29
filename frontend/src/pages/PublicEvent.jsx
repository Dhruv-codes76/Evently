import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function PublicEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEvent() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${API_URL}/events/${id}`);
        if (!res.ok) throw new Error("Event not found");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        setError("Event not found");
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-accent px-2">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl p-10 mx-auto border border-white/10">
        {loading ? (
          <div className="text-center text-white text-lg font-semibold">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-400 text-lg font-semibold">{error}</div>
        ) : (
          <>
            <h2 className="text-4xl font-extrabold text-textPrimary mb-6 text-center">{event.title}</h2>
            <div className="text-center text-textSecondary mb-4 text-base">
              {new Date(event.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
            </div>
            {event.description && (
              <p className="text-base text-textPrimary/90 text-center mt-6">{event.description}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
