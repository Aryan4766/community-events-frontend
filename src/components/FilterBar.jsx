import React, { useMemo } from "react";
import { useEvents } from "../context/EventsContext.jsx";

const FilterBar = ({ filters, onChange, onReset }) => {
  const { events } = useEvents();

  const { types, locations } = useMemo(() => {
    const typeSet = new Set();
    const locationSet = new Set();
    events.forEach((event) => {
      typeSet.add(event.type);
      locationSet.add(event.location);
    });
    return {
      types: Array.from(typeSet),
      locations: Array.from(locationSet),
    };
  }, [events]);

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 md:flex-row md:items-end md:gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-slate-600 mb-1">Search</label>
        <input
          type="text"
          value={filters.query}
          onChange={(e) => onChange("query", e.target.value)}
          placeholder="Search by title or description"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-slate-600 mb-1">Type</label>
        <select
          value={filters.type}
          onChange={(e) => onChange("type", e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">All</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-slate-600 mb-1">Location</label>
        <select
          value={filters.location}
          onChange={(e) => onChange("location", e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="">All</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-slate-600 mb-1">Date (on or after)</label>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => onChange("date", e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex items-center gap-2 md:pb-1">
        <button
          onClick={onReset}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
