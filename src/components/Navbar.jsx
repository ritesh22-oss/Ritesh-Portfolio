import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { EXTRA_LINKS, SIDEBAR_LINKS, SITE_NAME } from "../constants";
import { github, linkedin } from "../assets/icons";

// navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Navbar Header */}
      <header className="header">
        {/* brand logo at extreme left (16-24px from left viewport edge) */}
        <NavLink
          to="/"
          className={`w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md items-center justify-center flex font-bold shadow-sm hover:shadow-md transition-all z-30 shrink-0 border border-white/50 ${
            isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          title={SITE_NAME}
          aria-label="Home"
        >
          <p className="blue-gradient_text font-poppins text-lg font-black tracking-tight">
            {SITE_NAME.split(" ")[0][0] + "" + SITE_NAME.split(" ")[1][0]}
          </p>
        </NavLink>

        {/* desktop nav links pill at extreme right */}
        <nav className="hidden md:flex text-base lg:text-lg gap-7 font-medium items-center justify-center bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full shadow-sm border border-white/40">
          {SIDEBAR_LINKS.map((link) => (
            <NavLink
              to={link.route}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-800"
                }`
              }
              title={link.label}
              key={`Link_${link.label}`}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="h-4 w-px bg-slate-300" aria-hidden="true" />

          {/* linkedin profile */}
          <NavLink
            to={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn Profile"
            aria-label="Visit Ritesh Ganguly's LinkedIn Profile"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-slate-100 hover:scale-110 active:scale-95"
          >
            <img src={linkedin} alt="LinkedIn" className="w-[18px] h-[18px] object-contain" />
          </NavLink>

          {/* github source code */}
          <NavLink
            to={EXTRA_LINKS.source_code}
            target="_blank"
            rel="noreferrer noopener"
            title="Source Code"
            aria-label="Visit Ritesh Ganguly's GitHub Profile"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-slate-100 hover:scale-110 active:scale-95"
          >
            <img src={github} alt="Github" className="w-5 h-5 object-contain" />
          </NavLink>
        </nav>

        {/* mobile hamburger button at right side (only visible when menu is closed) */}
        {!isMenuOpen && (
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden z-30 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md shadow-sm border border-white/60 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all active:scale-95 hover:bg-white"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="w-4 h-0.5 bg-slate-800 rounded-full" />
            <span className="w-4 h-0.5 bg-slate-800 rounded-full" />
            <span className="w-4 h-0.5 bg-slate-800 rounded-full" />
          </button>
        )}
      </header>

      {/* Dedicated Mobile Navigation Modal Overlay with Frosted Glassmorphism Panel */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex items-start justify-center p-4 sm:p-6 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop (tap outside to close) */}
        <div
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Floating frosted-glass navigation card */}
        <aside
          ref={menuRef}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-sm rounded-3xl glass-panel-mobile p-5 sm:p-6 flex flex-col justify-between max-h-[calc(100dvh-2rem)] overflow-y-auto transition-all duration-300 ease-out transform ${
            isMenuOpen
              ? "scale-100 translate-y-0 opacity-100 shadow-2xl"
              : "scale-95 -translate-y-4 opacity-0 pointer-events-none"
          }`}
          aria-label="Mobile Navigation Menu"
        >
          {/* Header with single RG Logo and aligned Close Button */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/50">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2.5 group"
              title={SITE_NAME}
              aria-label="Home"
            >
              <div className="w-9 h-9 rounded-xl bg-white/90 shadow-xs flex items-center justify-center border border-white/70 group-hover:scale-105 transition-transform">
                <span className="blue-gradient_text font-poppins font-black text-sm">
                  {SITE_NAME.split(" ")[0][0] + "" + SITE_NAME.split(" ")[1][0]}
                </span>
              </div>
              <span className="font-poppins font-bold text-slate-800 text-sm tracking-tight">
                {SITE_NAME}
              </span>
            </NavLink>

            {/* Circular Close Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-9 h-9 rounded-xl bg-white/60 hover:bg-white/90 active:scale-90 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all border border-white/60 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close menu"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Section */}
          <div className="py-4">
            <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500/90 px-2 mb-2.5">
              Navigation
            </p>

            <nav className="flex flex-col gap-1.5">
              {/* 1. Home */}
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-blue-500/15 text-blue-700 border border-blue-500/25 shadow-xs"
                      : "text-slate-700 hover:bg-white/50 hover:text-slate-900 active:scale-98"
                  }`
                }
              >
                <span>Home</span>
                <span className="text-xs text-slate-400">→</span>
              </NavLink>

              {/* 2. About, 3. Projects, 4. Contact in exact order */}
              {SIDEBAR_LINKS.map((link) => (
                <NavLink
                  to={link.route}
                  key={`mobile_nav_${link.label}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-blue-500/15 text-blue-700 border border-blue-500/25 shadow-xs"
                        : "text-slate-700 hover:bg-white/50 hover:text-slate-900 active:scale-98"
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">→</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="pt-3.5 border-t border-white/50">
            <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500/90 px-2 mb-2.5">
              Connect
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              <NavLink
                to={EXTRA_LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/50 hover:bg-white/80 border border-white/60 text-slate-800 text-xs font-semibold shadow-xs transition-all active:scale-95"
                aria-label="Visit LinkedIn Profile"
              >
                <img src={linkedin} alt="LinkedIn" className="w-3.5 h-3.5 object-contain" />
                <span>LinkedIn</span>
              </NavLink>

              <NavLink
                to={EXTRA_LINKS.source_code}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/50 hover:bg-white/80 border border-white/60 text-slate-800 text-xs font-semibold shadow-xs transition-all active:scale-95"
                aria-label="Visit GitHub Profile"
              >
                <img src={github} alt="GitHub" className="w-3.5 h-3.5 object-contain" />
                <span>GitHub</span>
              </NavLink>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
