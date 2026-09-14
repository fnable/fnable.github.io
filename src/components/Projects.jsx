import useInView from "../hooks/useInView";
import Todo from"../assets/images/todo.jpg";
import Weather from"../assets/images/weather.jpg";
import Website from"../assets/images/website.jpg";
import Timekeeping from"../assets/images/timekeeping.jpg";
import Backend from"../assets/images/backend.jpg";
import Patient from"../assets/images/patient.jpg";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [ref, inView] = useInView();
  return (
    <section
      id="projects"
      ref={ref}
      className={`p-8 bg-secondary text-secondary-foreground slide-in ${
        inView ? "is-visible" : ""
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="To-Do App"
          description="A simple task manager built in React."
          image={Todo}
          alt="To-Do App"
        />

        <ProjectCard
          title="Weather App"
          description="Shows live weather using an API."
          image={Weather}
          alt="Weather App"
        />

        <ProjectCard
          title="Portfolio Website"
          description="My personal portfolio built with React and Tailwind."
        />

        <ProjectCard
          title="Company Website"
          description="A full-stack blog using vanilla web development for the frontend."
          image={Website}
          alt="Company Website"
        />

        <ProjectCard
          title="Employee Timekeeping System"
          description="An employee timekeeping system built using CodeIgniter and vanilla web development."
          image={Timekeeping}
          alt="Employee Timekeeping System"
        />

        <ProjectCard
          title="Company Backend API System"
          description="A backend API system built using Laravel and LAMP Stack."
          image={Backend}
          alt="Company Backend API System"
        />

        <ProjectCard
          title="Patient plan form"
          description="A patient plan form built using vanilla html, css, and javascript."
          image={Patient}
          alt="Patient plan form"
        />
      </div>
    </section>
  );
}
