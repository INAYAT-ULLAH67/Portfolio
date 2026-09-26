import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const navLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full text-sm transition-colors ${
      isActive
        ? 'bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600'
        : 'text-zinc-500 hover:text-zinc-400'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg text-sm ${
      isActive
        ? 'bg-zinc-50 font-medium text-zinc-800'
        : 'text-zinc-500 hover:bg-zinc-50'
    }`

  return (
    <nav className=" shadow sticky z-50 top-0  bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between ">
      <Link
        to="/Github"
        className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:border-zinc-400 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </Link>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
        <NavLink to="/" end className={navLinkClass}>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
      </div>

      {/* Desktop CTA Button */}
      <Link
        to="/contact-us"
        className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full"
      >
        Let's talk
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="#">
            <path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
      >
        <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
          <NavLink to="/" end onClick={toggleMenu} className={mobileNavLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={mobileNavLinkClass}>About</NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className={mobileNavLinkClass}>Projects</NavLink>
          

          <Link
            to="/contact-us"
            onClick={toggleMenu}
            className="flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full mt-3 w-fit"
          >
            Let's talk
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header