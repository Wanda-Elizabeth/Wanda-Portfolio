import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="section-container text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            I build <span className="text-primary">reliable software</span> that solves real problems.
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Full Stack Software Engineer building web applications, APIs, and data-driven systems with TypeScript, React, Node.js, Python, PostgreSQL, and Docker.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="btn-primary cursor-pointer inline-block"
          >
            View My Work
          </Link>
          <a
            href="https://github.com/Wanda-Elizabeth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/wanda-elizabeth-a99645233/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 opacity-60 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
