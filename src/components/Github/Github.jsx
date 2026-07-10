import React, { useState, useEffect } from 'react'

function Github() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.github.com/users/INAYAT-ULLAH67")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub profile data.")
        }
        return res.json()
      })
      .then((data) => {
        setProfile(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Loading State UI
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="animate-pulse font-mono text-sm text-zinc-400">
          Fetching terminal metrics...
        </div>
      </div>
    )
  }

  // Error State UI
  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white px-5">
        <div className="text-center p-6 max-w-sm border border-red-100 rounded-2xl bg-red-50/30">
          <p className="text-sm font-mono text-red-600 mb-2">Network Error</p>
          <p className="text-xs text-zinc-500">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-[80vh] text-zinc-900 px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 pt-12 sm:pt-20 pb-24">
      {/* Header Area */}
      <header className="max-w-2xl mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-500 mb-4">
          Active Node
        </span>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-3">
          GitHub Profile Core
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
          Live compilation endpoints fetched straight from the GitHub API network.
        </p>
      </header>

      {/* Profile Card Container */}
      {profile && (
        <div className="max-w-xl bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Interactive Border Wrapped Avatar */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-zinc-100 rounded-xl translate-x-2 translate-y-2" />
              <img
                src={profile.avatar_url}
                alt={profile.name || "Inayat"}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-zinc-200 bg-white"
              />
            </div>

            {/* Profile Content Details */}
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-medium text-zinc-900 mb-0.5">
                {profile.name || "Inayat Ullah"}
              </h2>
              <p className="font-mono text-sm text-zinc-400 mb-4">
                @{profile.login}
              </p>
              
              {profile.bio && (
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {profile.bio}
                </p>
              )}

              {/* Real-time GitHub Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 border-y border-zinc-100 py-4 mb-6">
                <div className="text-center sm:text-left">
                  <span className="block text-xl font-medium text-zinc-900">{profile.public_repos}</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Repos</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-xl font-medium text-zinc-900">{profile.followers}</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Followers</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-xl font-medium text-zinc-900">{profile.following}</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Following</span>
                </div>
              </div>

              {/* Action Button Link to GitHub */}
              <div className="flex justify-center sm:justify-start">
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-950 text-zinc-50 hover:bg-zinc-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-colors"
                >
                  View Full Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Github