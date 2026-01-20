import React from "react";
import { useEvents } from "../context/EventsContext.jsx";

const RSVPModal = () => {
  const { rsvpEvent, closeConfirmation } = useEvents();

  if (!rsvpEvent) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4">
          <p className="text-sm font-semibold text-primary">RSVP Confirmed</p>
          <h3 className="mt-1 text-lg font-bold text-slate-900">{rsvpEvent.title}</h3>
        </div>
        <p className="text-sm text-slate-700">
          You&apos;re registered for this event. Check your email for updates from the host.
        </p>
        <div className="mt-4 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-semibold text-slate-800">Date:</span>{" "}
            {new Date(rsvpEvent.date).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Location:</span> {rsvpEvent.location}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Host:</span> {rsvpEvent.host}
          </p>
        </div>
        <button
          onClick={closeConfirmation}
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RSVPModal;
