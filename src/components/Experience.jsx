import experienceImg from "../assets/images/experience.jpg";
import useInView from "../hooks/useInView";

export default function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" ref={ref} className={`pt-10 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 gap-y-8 gap-x-0 text-center bg-secondary text-secondary-foreground slide-in ${inView ? "is-visible" : ""}`}>

      <div className="space-y-4">
        <img
          src={experienceImg}
          alt="Experience"
          className="w-80 h-100 mb-6 shadow-lg rounded-3xl"
        />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <h3 className="font-semibold">Junior Programmer</h3>
          <p>New Horizon Finance Corporation • 2024–Present</p>
          <p>Worked with React, Laravel, LAMP Stack, git, MySQL, CodeIgniter, and Firebase. Developed and deployed the backend and frontend of our website using Laravel, Bootstrap, jQuery, and vanilla web development. Developed and deployed employee timekeeping website used by HR to track attendance of 100+ employees.  Helped maintain and update our web system using CodeIgniter.</p>
          <h3 className="font-semibold">IT intern</h3>
          <p>Knowles Training Institute • 2024–2024</p>
          <p>Mainly documenting and tech support. I used microsoft office applications to create reports and presentations. I handled making daily and weekly reports. I guided users through basic troubleshooting and software usage.</p>
          <h3 className="font-semibold">Freelance Developer and Multimedia Artist</h3>
          <p>Self-employed • 2022–2024</p>
          <p>Worked on various freelance projects during college, including website development and maintenance. Utilized React, Tailwind, and Laravel to create responsive and user-friendly websites. Collaborated with clients to understand their needs and deliver customized solutions.</p>
        </div>
      
    </section>
  );
}
