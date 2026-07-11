import React from 'react'

function Home() {
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript','C','MySql'] },
    { category: 'Fundamentals', items: ['Data Structures & Algorithms(DSA)', 'Objec Oriented Programming (OOP)'] },
    { category: 'Frontend', items: ['React', 'CSS Grid', 'Flexbox','tailwindCss'] },
    { category: 'Frameword worked on', items: ['Django'] },
  ]

  const testimonials = [
    {
      quote: "Inayat writes clean, well-structured code and genuinely understands the problem before jumping to a solution.",
      name: "Jane Doe",
      role: "Senior Engineer",
    },
    {
      quote: "Solid grasp of fundamentals — his approach to algorithmic problems stood out during our sessions.",
      name: "John Smith",
      role: "Mentor",
    },
    {
      quote: "Picked up React fast and already thinks in components. Great attention to detail on the UI side.",
      name: "Alex Lee",
      role: "Peer Reviewer",
    },
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
{/* Hero */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 pt-10 sm:pt-16 md:pt-24 pb-12 sm:pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left: intro */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-500 mb-5 sm:mb-6">
              Available for work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 leading-tight mb-4 w-full">
              I build things with{' '}
              <span className="font-mono text-zinc-500">Python</span> and the web.
            </h1>
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg mb-7 sm:mb-8 max-w-md w-full">
              Python developer with a strong grip on data structures, algorithms,
              and OOP — now growing into frontend work with React and modern CSS.
            </p>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full transition-colors shadow-xs"
            >
              Download CV
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3f3f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right: terminal card */}
          <div className="bg-zinc-950 rounded-2xl p-4 sm:p-6 shadow-xl w-full max-w-md md:max-w-none mx-auto">
            <div className="flex gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-zinc-700"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-700"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-700"></span>
            </div>
            <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <code>
                <span className="text-zinc-500">{'>>> '}</span>
                <span className="text-zinc-200">class</span>{' '}
                <span className="text-zinc-100">Developer:</span>
                {'\n'}
                <span className="text-zinc-500">...</span>
                <span className="text-zinc-400">     def </span>
                <span className="text-zinc-100">__init__(self):</span>
                {'\n'}
                <span className="text-zinc-500">...</span>
                <span className="text-zinc-400">         self.name = </span>
                <span className="text-emerald-400">"Inayat"</span>
                {'\n'}
                <span className="text-zinc-500">...</span>
                <span className="text-zinc-400">         self.stack = </span>
                <span className="text-emerald-400">["Python", "JS", "React"]</span>
                {'\n'}
                <span className="text-zinc-500">...</span>
                <span className="text-zinc-400">         self.learning = </span>
                <span className="text-emerald-400">True</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-12 sm:py-16 bg-zinc-50 border-y border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 mb-2">What I work with</h2>
        <p className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10">
          A quick look at my current stack and focus areas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((group) => (
            <div key={group.category} className="bg-white border border-zinc-200 rounded-2xl p-5 sm:p-6">
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 mb-2">What people say</h2>
        <p className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10">
          Feedback from mentors and peers I've worked with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-zinc-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-mono shrink-0">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}

export default Home