import { useState } from "react";
import InputField from "../components/InputField";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function NewEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [locationError, setLocationError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setTitleError("");
    setDateError("");
    setLocationError("");
    let valid = true;
    if (!title) {
      setTitleError("Title is required.");
      valid = false;
    } else if (title.trim().length < 3) {
      setTitleError("Title must be at least 3 characters.");
      valid = false;
    }
    if (!date) {
      setDateError("Date is required.");
      valid = false;
    } else {
      const today = new Date();
      today.setHours(0,0,0,0);
      const inputDate = new Date(date);
      if (inputDate < today) {
        setDateError("Date cannot be in the past.");
        valid = false;
      }
    }
    if (description && description.length > 300) {
      setError("Description must be 300 characters or less.");
      valid = false;
    }
    if (!valid) return;
    setLoading(true);
    try {
      await api.post("/events", { title, date, location, description });
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to create event. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-2">
      <div className="bg-card p-10 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-textPrimary">Create New Event</h2>
        {error && <p className="text-red-500 text-sm mb-5">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            label="Title"
            placeholder={"Event Title"}
            value={title}
            onChange={setTitle}
            error={titleError}
          />
          <InputField
            label="Date"
            type="date"
            value={date}
            onChange={setDate}
            error={dateError}
          />
          <InputField
            label="Location"
            placeholder={"Event Location"}
            value={location}
            onChange={setLocation}
            error={locationError}
          />
          <textarea
            placeholder="Description (optional)"
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary ${error && description && description.length > 300 ? 'border-red-500' : ''}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={300}
          ></textarea>
          <Button
            variant="primary"
            className="w-full py-3 text-lg font-semibold mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Event"}
          </Button>
        </form>
      </div>
    </div>
  );
}
