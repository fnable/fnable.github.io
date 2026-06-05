import useInView from "../hooks/useInView";

export default function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" ref={ref} className={`p-8 bg-secondary text-secondary-foreground slide-in ${inView ? "is-visible" : ""}`}>
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">To-Do App</h3>
          <p className="mb-2">A simple task manager built in React.</p>
          <img src="/src/assets/images/todo.jpg" alt="To-Do App" className="w-80 h-60 object-cover rounded-md mb-2" />
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p className="mb-2">Shows live weather using an API.</p>
          <img src="/src/assets/images/weather.jpg" alt="Weather App" className="w-80 h-60 object-cover rounded-md mb-2" />
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="mb-2">My personal portfolio built with React and Tailwind.</p>
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Company website</h3>
          <p className="mb-2">A full-stack blog using vanilla web development for the frontend.</p>
          <img src="/src/assets/images/website.jpg" alt="Company Website" className="w-100 h-60 object-cover rounded-md mb-2" />
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Employee timekeeping system</h3>
          <p className="mb-2">An employee timekeeping system built using CodeIgniter and vanilla web development.</p>
          <img src="/src/assets/images/timekeeping.jpg" alt="Employee Timekeeping System" className="w-100 h-60 object-cover rounded-md mb-2" />
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Company backend API system</h3>
          <p className="mb-2">A backend API system built using Laravel and LAMP Stack.</p>
          <img src="/src/assets/images/backend.jpg" alt="Company Backend API System" className="w-100 h-60 object-cover rounded-md mb-2" />
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Patient plan form</h3>
          <p className="mb-2">A patient plan form built using vanilla html, css, and javascript.</p>
          <img src="/src/assets/images/patient.jpg" alt="Patient Plan Form" className="w-100 h-60 object-cover rounded-md mb-2" />
        </div>
        

      </div>
    </section>
  );
}
