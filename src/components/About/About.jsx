import React from 'react'

function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Intro */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 pt-10 sm:pt-16 md:pt-24 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Photo placeholder */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 text-sm font-mono">

            <img
                src="/inayat_full.jpg"
                alt="Inayat Ullah"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl object-cover border border-zinc-200/80 shadow-xl"
                loading="lazy"
            />

            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-500 mb-5">
              About me
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 leading-tight mb-4">
              Hi, I'm Inayat — a Computer Systems Engineering student.
            </h1>
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Currently in my 3rd year of a BE in Computer Systems Engineering at
              NED University of Engineering & Technology. I spend most of my time
              writing Python, working through data structures and algorithms, and
              lately building things on the web with React.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-12 sm:py-16 bg-zinc-50 border-y border-zinc-100">
        <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 mb-2">Education</h2>
        <p className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10">
          Where I'm studying, and where I'm at.
        </p>

        <div className="bg-white border border-zinc-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 max-w-2xl">
          <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-mono text-sm shrink-0">
            BE
          </div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-medium text-zinc-900">
              BE Computer Systems Engineering
            </h3>
            <p className="text-sm text-zinc-500">
              NED University of Engineering &amp; Technology
            </p>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 self-start sm:self-center">
            3rd year · Undergraduate
          </span>
        </div>
      </section>

      {/* What I'm focused on */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 mb-2">Right now</h2>
        <p className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10">
          What I'm spending most of my time on this year.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="border border-zinc-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-3">Sharpening</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Data structures and algorithms, and object-oriented design in Python.
            </p>
          </div>
          <div className="border border-zinc-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-3">Building</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Frontend projects with React, and getting comfortable with CSS Grid and Flexbox.
            </p>
          </div>
          <div className="border border-zinc-200 rounded-2xl p-5 sm:p-6">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-3">Exploring</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              How systems-level thinking from my coursework applies to real-world software design.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About