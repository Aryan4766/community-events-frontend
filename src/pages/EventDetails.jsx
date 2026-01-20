import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../context/EventsContext.jsx";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, joinEvent, joinedIds } = useEvents();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <p className="text-lg font-semibold text-slate-900">Event not found</p>
        <Link to="/" className="mt-2 inline-block text-primary hover:underline">
          Back to events
        </Link>
      </div>
    );
  }

  const isJoined = joinedIds.has(event.id);

  const handleJoin = () => {
    joinEvent(event.id);
  };

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Event</p>
        <h1 className="text-3xl font-bold text-slate-900">{event.title}</h1>
        <p className="text-sm text-slate-600">{event.description}</p>

        <div className="grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
          <Detail label="Date" value={new Date(event.date).toLocaleDateString()} />
          <Detail label="Location" value={event.location} />
          <Detail label="Type" value={event.type} />
          <Detail label="Host" value={event.host} />
        </div>
      </div>

      <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
        <h2 className="text-lg font-semibold text-slate-900">Ready to join?</h2>
        <p className="mt-1 text-sm text-slate-600">
          RSVP to save your spot and receive updates from the host.
        </p>
        <button
          onClick={handleJoin}
          className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isJoined ? "You’re already in!" : "Join / RSVP"}
        </button>
        <button
          onClick={() => navigate(-1)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
        >
          Back
        </button>
      </aside>
    </section>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
    <p className="text-base font-semibold text-slate-900">{value}</p>
  </div>
);

export default EventDetails;
