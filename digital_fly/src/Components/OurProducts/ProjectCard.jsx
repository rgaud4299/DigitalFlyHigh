import {motion as Motion  } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-card-bg2 rounded-xl overflow-hidden shadow-lg hover:shadow-card-hover transition-all"
    >
      {/* Image */}
      <div className="relative">
        <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
        {project.badge && (
          <span className="absolute top-3 left-3 bg-btn-color text-white text-xs px-2 py-1 rounded">
            {project.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="text-sm opacity-80">{project.tagline}</p>

        <p className="mt-3 text-sm"><strong>Client/Industry:</strong> {project.client}</p>
        <p className="text-sm"><strong>Tech Stack:</strong> {project.tech}</p>

        <div className="mt-3 space-y-1 text-sm">
          <p><strong>Challenge:</strong> {project.challenge}</p>
          <p><strong>Solution:</strong> {project.solution}</p>
          <p><strong>Result:</strong> {project.result}</p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          {project.live && (
            <a
              href={project.live}
              className="bg-btn-color hover:bg-btn-color-hover px-4 py-2 rounded-md text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.caseStudy && (
            <a
              href={project.caseStudy}
              className="bg-transparent border border-btn-color hover:bg-btn-color px-4 py-2 rounded-md text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </Motion.div>
  );
}
