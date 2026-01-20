import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {event.type}
        </p>
        <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
        <p className="text-sm text-slate-600">{event.description}</p>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p>
          {new Date(event.date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p>
          {event.location}
        </p>
        <p className="text-slate-500 text-xs">Hosted by {event.host}</p>
      </div>

      <Link
        to={`/events/${event.id}`}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        View details
      </Link>
    </article>
  );
};

export default EventCard;
