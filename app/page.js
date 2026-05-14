export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

    {/* BACKGROUND GLOWS */}
<div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

<div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

{/* NAVBAR */}
<nav className="w-full flex items-center justify-between px-8 py-6 relative z-20">

  <h2 className="text-2xl font-black tracking-tight">
    ResumeForge
  </h2>

  <div className="hidden md:flex gap-8 text-zinc-400">
    <a href="#" className="hover:text-white transition">
      Features
    </a>

    <a href="#" className="hover:text-white transition">
      Pricing
    </a>

    <a href="#" className="hover:text-white transition">
      Demo
    </a>
  </div>

  <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
    Sign In
  </button>

</nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 relative z-10">

        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full top-20"></div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight relative z-10">
          ResumeForge AI
        </h1>

        <p className="mt-8 text-zinc-400 text-xl max-w-2xl relative z-10">
          Create powerful AI resumes in seconds.
          Built for the modern hiring world.
        </p>

        <div className="mt-10 flex gap-5 relative z-10">

          <a
              href="https://t.me/YOUR_BOT_USERNAME"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Try Now
            </a>

          <a
              href="https://tiktok.com"
              target="_blank"
              className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
            >
              Watch Demo
            </a>
        </div>

      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-32 max-w-6xl mx-auto">

        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            AI Resume Builder
          </h3>

          <p className="text-zinc-400 leading-7">
            Generate modern professional resumes
            with powerful AI instantly.
          </p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            ATS Optimized
          </h3>

          <p className="text-zinc-400 leading-7">
            Designed to pass modern hiring systems
            and increase interviews.
          </p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">
            Instant Export
          </h3>

          <p className="text-zinc-400 leading-7">
            Download beautiful PDF resumes
            in one click.
          </p>
        </div>

      </section>

      {/* STATS */}
<section className="mt-32 px-6">

  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-black">12K+</h3>
      <p className="text-zinc-400 mt-2">
        Resumes Generated
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-black">94%</h3>
      <p className="text-zinc-400 mt-2">
        ATS Success Rate
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-black">5min</h3>
      <p className="text-zinc-400 mt-2">
        Average Build Time
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
      <h3 className="text-4xl font-black">24/7</h3>
      <p className="text-zinc-400 mt-2">
        AI Assistance
      </p>
    </div>

  </div>

</section>

{/* DASHBOARD PREVIEW */}
<section className="mt-32 px-6">

 <div className="max-w-6xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 overflow-hidden float-animation glow">

    <div className="flex items-center gap-3 mb-8">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div>

        <h2 className="text-5xl font-black leading-tight">
          AI-Powered Resume Creation
        </h2>

        <p className="mt-6 text-zinc-400 text-xl leading-8">
          Generate modern, ATS-ready resumes
          with intelligent AI optimization.
        </p>

      </div>

      <div className="bg-black border border-zinc-800 rounded-3xl p-6">

        <div className="space-y-4">

          <div className="bg-zinc-900 p-4 rounded-2xl">
            <p className="text-sm text-zinc-400">
              Experience
            </p>

            <div className="mt-2 h-3 bg-zinc-700 rounded-full w-[90%]"></div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            <p className="text-sm text-zinc-400">
              Skills Match
            </p>

            <div className="mt-2 h-3 bg-purple-500 rounded-full w-[80%]"></div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-2xl">
            <p className="text-sm text-zinc-400">
              ATS Optimization
            </p>

            <div className="mt-2 h-3 bg-green-500 rounded-full w-[95%]"></div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* CTA */}
      <section className="mt-40 pb-32 text-center px-6">

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-[40px] p-16">

          <h2 className="text-5xl font-bold">
            Build Your Resume Today
          </h2>

          <p className="mt-6 text-zinc-400 text-xl">
            Join the future of AI-powered job applications.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
            Get Started
          </button>

        </div>

      </section>

      <footer className="mt-32 pb-10 text-zinc-500 text-sm text-center">
  © 2025 ResumeForge AI. Built with AI.
</footer>

    </main>
  );
}
