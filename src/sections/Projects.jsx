export default function Projects() {
  const projects = [
    {
      title: 'DevForge',
      description: 'Full-stack developer platform combining AI-generated coding challenges, job discovery, developer profiles, and real-time communication.',
      problem: 'Developers need a centralized platform to improve coding skills, discover job opportunities, and connect with peers in real-time.',
      what_built: 'A comprehensive web application with AI-powered challenge generation, job marketplace, developer profiles, and WebSocket-based real-time messaging.',
      architecture: 'Frontend: React + TypeScript. Backend: Django with Django REST Framework. Real-time: WebSockets. Database: PostgreSQL. Deployment: Docker + GitHub Actions.',
      tech: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'WebSockets', 'AI/Groq', 'Docker', 'GitHub Actions'],
      highlights: [
        'AI-generated coding challenges using Groq API',
        'Real-time messaging and notifications via WebSockets',
        'Job discovery and matching algorithm',
        'Developer profile system with portfolio showcase',
        'Community features and user engagement',
        'Production-ready CI/CD pipeline',
      ],
      github: 'https://github.com/Wanda-Elizabeth/Developer-CRM',
    },
    {
      title: 'Client CRM Platform',
      description: 'Comprehensive CRM application for managing client relationships, sales pipelines, and business workflows.',
      problem: 'Sales teams need an efficient way to manage clients, track leads, manage deals, and automate workflows.',
      what_built: 'A full-featured CRM with client management, lead tracking, deal pipeline, source attribution, and role-based access control.',
      architecture: 'Frontend: Vue.js + Inertia.js. Backend: Laravel. Database: MySQL. Styling: Tailwind CSS.',
      tech: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
      highlights: [
        'Client and contact management with detailed profiles',
        'Lead tracking with status workflows',
        'Deal pipeline with stage management',
        'Source tracking and analytics',
        'Role-based access control for team collaboration',
        'Search and filtering across all data',
      ],
      github: 'Private project',
      private: true,
    },
    {
      title: 'Digital Health Patient Management API',
      description: 'RESTful API for managing patient data, medical records, and healthcare workflows in production healthcare applications.',
      problem: 'Healthcare systems need robust, validated APIs to manage patient information securely and reliably.',
      what_built: 'Production-ready REST API with comprehensive patient management, validation, error handling, and comprehensive documentation.',
      architecture: 'Backend: FastAPI (Python). Database: PostgreSQL. Documentation: OpenAPI/Swagger. Deployment: Docker containerization.',
      tech: ['FastAPI', 'Python', 'PostgreSQL', 'REST APIs', 'OpenAPI/Swagger'],
      highlights: [
        'CRUD operations for patient records and medical data',
        'Advanced search and filtering capabilities',
        'Comprehensive data validation',
        'Structured error responses',
        'Automatic OpenAPI documentation',
        'PostgreSQL with optimized queries',
      ],
      github: 'https://github.com/Wanda-Elizabeth/Digital-Health-API',
    },
    {
      title: 'Solace',
      description: 'Mental health platform addressing anxiety disorder among Gen Z in Kenya. Aims to improve quality of life and prevent mental health diseases.',
      problem: 'Gen Z in Kenya face increasing anxiety and mental health challenges with limited accessible support and resources.',
      what_built: 'A comprehensive mental health application combining community support, AI-powered resources, and evidence-based tools for anxiety management and wellness.',
      architecture: 'Full-stack application designed to provide accessible mental health support for Gen Z in Kenya.',
      tech: ['Python', 'AI', 'Mental Health Tech', 'Community Platform'],
      highlights: [
        'Anxiety disorder support and resources',
        'Mental health awareness and education',
        'Community support features',
        'AI-powered mental wellness tools',
        'Tailored resources for Gen Z in Kenya',
        'Prevention and early intervention focus',
      ],
      github: 'https://drive.google.com/drive/folders/1qQAAjg_6kgpJlrpQLUjJAw8tqB1AC_r',
      isDrive: true,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>
          <p className="section-subtitle">Full-stack applications demonstrating engineering expertise and production problem-solving.</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-colors">
              <div className="p-8 bg-dark-secondary">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xl text-gray-300">{project.description}</p>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Problem</h4>
                    <p className="text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Solution</h4>
                    <p className="text-gray-300">{project.what_built}</p>
                  </div>
                </div>

                {/* Architecture */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary mb-3">Architecture & Tech Stack</h4>
                  <p className="text-gray-300 mb-4">{project.architecture}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-dark rounded border border-gray-700 text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-700">
                  {project.github && project.github !== 'Private project' && !project.github.includes('TODO') && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-white transition-colors flex items-center gap-2"
                    >
                      {project.isDrive ? (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.75 2.36 5.98 5.5h2.37c-.3-1.9-1.1-3.65-2.27-5.1l1.46-1.46C19.54 7.15 20 8.5 20 10c0 .36-.04.71-.1 1.04zM3 5.5h2.4v7H3zm3-8h1.5v15h-1.5zm6-1h1.5v17h-1.5zM9 12.5h8v2H9z" />
                          </svg>
                          View Project
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Code
                        </>
                      )}
                    </a>
                  )}
                  {project.private && (
                    <span className="text-gray-400 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                      </svg>
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
