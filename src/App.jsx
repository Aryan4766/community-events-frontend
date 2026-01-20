import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import { EventsProvider } from "./context/EventsContext.jsx";
import RSVPModal from "./components/RSVPModal.jsx";

const App = () => {
  return (
    <EventsProvider>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-12 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>
        </main>
        <RSVPModal />
      </div>
    </EventsProvider>
  );
};

export default App;
