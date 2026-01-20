import React, { createContext, useState, useMemo } from "react";
import { events as eventsData } from "../data/events.json";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  console.log('EventsProvider is executing with hardcoded data');
  const [events] = useState(eventsData);
  const [filters, setFilters] = useState({
    query: "",
    type: "",
    date: "",
    location: "",
  });
  const [rsvpEventId, setRsvpEventId] = useState(null);
  const [joinedIds, setJoinedIds] = useState(new Set());

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery =
        filters.query.trim().length === 0 ||
        event.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.query.toLowerCase());

      const matchesType =
        !filters.type || event.type.toLowerCase() === filters.type.toLowerCase();

      const matchesLocation =
        !filters.location ||
        event.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesDate =
        !filters.date || new Date(event.date) >= new Date(filters.date);

      return matchesQuery && matchesType && matchesLocation && matchesDate;
    });
  }, [events, filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      query: "",
      type: "",
      date: "",
      location: "",
    });
  };

  const joinEvent = (eventId) => {
    setJoinedIds((prev) => new Set(prev).add(eventId));
    setRsvpEventId(eventId);
  };

  const closeConfirmation = () => setRsvpEventId(null);

  const rsvpEvent = events.find((e) => e.id === rsvpEventId) || null;

  return (
    <EventsContext.Provider value={{
      events,
      filteredEvents,
      filters,
      updateFilter,
      resetFilters,
      joinEvent,
      joinedIds,
      rsvpEvent,
      closeConfirmation,
    }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const ctx = React.useContext(EventsContext);
  if (!ctx) throw new Error("useEvents must be used within EventsProvider");
  return ctx;
};
