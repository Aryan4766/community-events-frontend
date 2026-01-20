import React from "react";
import FilterBar from "../components/FilterBar.jsx";
import EventCard from "../components/EventCard.jsx";
import { useEvents } from "../context/EventsContext.jsx";

const Home = () => {
  const { filteredEvents, filters, updateFilter, resetFilters } = useEvents();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Discover</p>
        <h1 className="text-3xl font-bold text-slate-900">Explore local events</h1>
        <p className="text-sm text-slate-600">
          Find workshops, meetups, sports, and music happening near you.
        </p>
      </div>

      <FilterBar filters={filters} onChange={updateFilter} onReset={resetFilters} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length === 0 && (
          <div className="col-span-full rounded-2xl bg-white p-6 text-center text-slate-600 shadow-sm ring-1 ring-slate-200/70">
            No events match these filters. Try adjusting your search.
          </div>
        )}
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Home;
