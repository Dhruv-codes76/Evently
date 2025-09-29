import React from "react";
import { Share as ShareIcon } from "@mui/icons-material";

export default function EventCard({ event, onCopy }) {
  return (
    <div className="bg-card w-full max-w-xs sm:max-w-sm md:max-w-md shadow-md p-4 sm:p-5 rounded-xl border hover:shadow-lg hover:scale-[1.01] transition duration-150 flex flex-col gap-2 relative mx-auto">
      {onCopy && (
        <button
          className="absolute top-2 right-2 text-primary bg-white/80 hover:bg-primary/10 hover:text-accent p-1 rounded-full transition shadow"
          title="Share Event Link"
          onClick={onCopy}
        >
          <ShareIcon fontSize="small" />
        </button>
      )}
      <h2 className="text-2xl text-center font-semibold text-textPrimary mb-1 break-words">{event.title}</h2>
      {event.description && (
        <p className="text-base text-center text-textPrimary/80 mb-2 break-words">{event.description}</p>
      )}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-2">
        <span className="inline-flex items-center gap-1 text-sm text-textSecondary">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5S9.515 6 12 6s4.5 2.015 4.5 4.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5v5m0 0h-2m2 0h2" /></svg>
          {event.location}
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-textSecondary">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5.25 19.5A2.25 2.25 0 0 1 3 17.25V7.5A2.25 2.25 0 0 1 5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v9.75a2.25 2.25 0 0 1-2.25 2.25H5.25z" /></svg>
          {new Date(event.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
        </span>
      </div>
    </div>
  );
}
