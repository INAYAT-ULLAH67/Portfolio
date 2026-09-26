import React, { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
  
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success");
        event.target.reset();
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-[80vh] text-zinc-900 px-5 sm:px-6 md:px-12 lg:px-24 xl:px-40 pt-12 sm:pt-20 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-500 mb-4">
            Connect
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
            Let's build something together.
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Whether you want to discuss database architecture, system optimization, or potential collaborations, drop a message right here.
          </p>
        </div>

        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <form onSubmit={onSubmit} className="space-y-5">

            <div>
              <label htmlFor="name" className="block text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-hidden focus:border-zinc-950 transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-hidden focus:border-zinc-950 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-zinc-50/50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-hidden focus:border-zinc-950 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {result === "Success" && (
              <div className="p-3 rounded-lg text-xs font-mono border bg-emerald-50/50 text-emerald-700 border-emerald-100">
                ✓ Message transmission successful! I'll be in touch soon.
              </div>
            )}

            {result === "Error" && (
              <div className="p-3 rounded-lg text-xs font-mono border bg-red-50/50 text-red-700 border-red-100">
                ✕ Transmission failed. Please verify your connection and try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center bg-zinc-950 text-zinc-50 hover:bg-zinc-800 disabled:bg-zinc-300 disabled:cursor-not-allowed text-sm font-medium py-2.5 rounded-xl transition-colors shadow-xs"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}