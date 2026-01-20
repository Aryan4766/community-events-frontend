import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
            CE
          </span>
          Community Events
        </Link>
        <nav className="text-sm font-medium text-slate-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 transition hover:text-primary ${isActive ? "text-primary" : ""}`
            }
          >
            Explore
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
