import React from 'react'
import { Link } from 'react-router'

function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="bg-zinc-950 text-zinc-400 px-6 md:px-12 lg:px-24 xl:px-40 pt-16 pb-8">
      
      {/* Top CTA */}
      <div className="flex flex-col items-center text-center border-b border-zinc-800 pb-12 mb-10">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
          Let's build something together
        </h2>
        <p className="text-zinc-400 mb-6 max-w-md">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <Link
          to="/contact-us"
          className="flex items-center gap-2.5 bg-white text-zinc-900 hover:bg-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full transition-colors"
        >
          Get in touch
          <span className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className='text-2xl text-white font-mono mb-2'>.<b>I</b>nayat</div>
          <p className="text-sm text-zinc-500">
            Building thoughtful, well-crafted web experiences.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white text-sm font-medium mb-3">Navigate</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white text-sm font-medium mb-3">Connect</h4>
          <div className="flex flex-col gap-2 text-sm">
            <button
              onClick={() => openLink('https://github.com/INAYAT-ULLAH67')}
              className="text-left hover:text-white transition-colors cursor-pointer bg-transparent p-0"
            >
              GitHub
            </button>
            <button
              onClick={() => openLink('https://linkedin.com/in/your-linkedin')}
              className="text-left hover:text-white transition-colors cursor-pointer bg-transparent p-0"
            >
              LinkedIn
            </button>
            <button
              onClick={() => openLink('mailto:your-email@example.com')}
              className="text-left hover:text-white transition-colors cursor-pointer bg-transparent p-0"
            >
              Email
            </button>
          </div>
        </div>

        {/* Availability */}
        <div>
          <h4 className="text-white text-sm font-medium mb-3">Status</h4>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Available for work
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} Inayat Ullah. All rights reserved.</span>
        <span>Built with React & Tailwind</span>
      </div>
    </footer>
  )
}

export default Footer