import React, { useState } from 'react'

function Projects() {
  // 1. Project Data Store with 'type' classifications
  const projectData = [
    {
      title: "SimpleDBMS with Tkinter",
      description: "A custom Database Management System featuring automatic file system creation, dynamic field configuration, granular CRUD record operations, database listing, and robust internal value-based search functionality.",
      tags: ["Python", "Tkinter", "GUI Design", "File Management", "DBMS"],
      category: "Backend & DB",
      type: "Academic",
      liveLink: null,
      githubLink: "https://github.com/INAYAT-ULLAH67",
    },
    {
      title: "Car Rental System",
      description: "A full-stack vehicle rental platform featuring intuitive fleet management tools, active booking constraints, automated rental history ledger tracking, and an analytical dashboard for monitoring revenue metrics.",
      tags: ["Django", "Python", "Bootstrap", "Full Stack"],
      category: "Backend & DB",
      type: "Academic",
      liveLink: null, 
      githubLink: "https://github.com/INAYAT-ULLAH67",
    },
    {
      title: "File Compression Tool",
      description: "A Python-based utility engineered to compress and decompress text files efficiently using Huffman Coding and custom encoding algorithms, optimizing local storage footprints.",
      tags: ["Python", "Algorithms", "File I/O", "Data Compression"],
      category: "Algorithms",
      type: "Academic",
      liveLink: null, 
      githubLink: "https://github.com/INAYAT-ULLAH67/Compression-Toll",
    },
    {
      title: "Pakhtoon Community Portal (PC Portal) V1.0",
      description: "A BCNF-compliant relational database system engineered to replace decentralized workflows. Features a central student directory, role-based access control, automated payment ledgers, and custom MySQL triggers enforcing strict community governance rules.",
      tags: ["MySQL", "Database Design", "BCNF Normalization", "Triggers & Joins"],
      category: "Backend & DB",
      type: "Academic",
      liveLink: null,
      githubLink: "https://www.linkedin.com/posts/inayat-shah-994847343_dbms-mysql-databasedesign-ugcPost-7462444648620244993-eWyp/?utm_source=share&utm_medium=member_android&rcm=ACoAAFYWiMABoh2wOeql9DTAwBrElpFkTriartg",
    },
    {
      title: "Currency Converter",
      description: "A dynamic frontend application utilizing third-party exchange rate APIs, custom hooks, and state management to provide real-time currency conversion calculations and fluid currency switching.",
      tags: ["React", "JavaScript", "REST API", "Tailwind CSS"],
      category: "Frontend",
      type: "Self-Initiated",
      liveLink: null, 
      githubLink: "https://github.com/INAYAT-ULLAH67",
    },
    {
      title: "Password Generator",
      description: "An interactive utility optimized with React optimization hooks (`useCallback`, `useEffect`, `useRef`) to dynamically configure lengths and character sets, generating secure cryptographically sound strings instantaneously.",
      tags: ["React", "Hooks Optimization", "JavaScript", "Tailwind CSS"],
      category: "Frontend",
      type: "Self-Initiated",
      liveLink: null, 
      githubLink: "https://github.com/INAYAT-ULLAH67",
    },
    {
      title: "Regulated Power Supply",
      description: "An adjustable ~15V DC power supply engineered using a 12+12V center-tapped transformer, a bridge rectifier circuit, and a linear voltage regulator. Features 100µF filtering capacitors for ripple voltage reduction and an integrated LED terminal display for real-time monitoring.",
      tags: ["Circuit Design", "Hardware Testing", "Electrical Engineering"],
      category: "Hardware",
      type: "Academic",
      liveLink: null, 
      githubLink: "https://github.com/INAYAT-ULLAH67",
    },
    {
      title: "Custom ISA: ALU & Control Unit Design",
      description: "Designed and engineered the Arithmetic Logic Unit (ALU) and Main Control Unit for a custom hardware architecture. Formulated control signal matrices and optimized execution datataths to handle instruction decoding, conditional branching, and first-principles logical operations.",
      tags: ["Computer Architecture", "ALU Design", "Control Units", "Digital Logic"],
      category: "Hardware",
      type: "Academic",
      liveLink: null,
      githubLink: "https://github.com/INAYAT-ULLAH67",
    }
  ]

  // 2. State for Filter Management
  const categories = ["All", "Frontend", "Backend & DB", "Algorithms", "Hardware"]
  const [activeFilter, setActiveFilter] = useState("All")

  // 3. Filtering Logic
  const filteredProjects = activeFilter === "All"
    ? projectData
    : projectData.filter(project => project.category === activeFilter)

  return (
    <div className="bg-white min-h-screen text-zinc-900 px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 pt-12 sm:pt-20 pb-24">
      
      {/* Header Area */}
      <header className="max-w-2xl mb-12 sm:mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-500 mb-4">
          Provenance & Code
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-3">
          Selected Engineering Projects
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
          A focused collection of work spanning interactive frontend interfaces, structured database design, hardware systems, and fundamental algorithmic implementations.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-100 pb-6 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === category
                ? 'bg-zinc-950 text-zinc-50 shadow-xs'
                : 'bg-transparent text-zinc-500 hover:text-zinc-900 border border-transparent hover:border-zinc-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid Display */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <article 
            key={project.title} 
            className="group flex flex-col justify-between p-6 sm:p-8 bg-white border border-zinc-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div>
              {/* Category & Origin Context Indicators */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${
                  project.type === 'Academic' 
                    ? 'bg-blue-50/40 text-blue-600/90 border-blue-100' 
                    : 'bg-emerald-50/40 text-emerald-600/90 border-emerald-100'
                }`}>
                  {project.type}
                </span>
              </div>
              
              {/* Title & Description */}
              <h2 className="text-xl font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors mb-3">
                {project.title}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom section: Badges + CTAs */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200/60 text-xs text-zinc-600 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors"
                  >
                    Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  Source Code
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </main>

    </div>
  )
}

export default Projects