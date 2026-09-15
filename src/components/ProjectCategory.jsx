import ProjectCard from "./ProjectCard";

export default function ProjectCategory({
  title,
  projects,
  isOpen,
  onToggle,
}) {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center border p-4 rounded-lg font-semibold text-xl"
      >
        <span>{title}</span>

        <span>
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
            />
          ))}
        </div>
      )}
    </div>
  );
}