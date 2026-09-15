import useInView from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} className={`p-8 bg-secondary text-secondary-foreground slide-in ${inView ? "is-visible" : ""}`}>
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-center max-w-6xl mx-auto">
        I'm currently a Junior Programmer at New Horizon Finance Corporation, where I work with React, Bootstrap, Tailwind, Laravel, CodeIgniter, and Firebase. I'm passionate about web development and continuously learning new technologies to enhance my skills. 
      </p>
      <br></br>
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <ul className="list-disc list-inside max-w-3xl mx-auto">
        <li>Expert in PHP, Laravel, and CodeIgniter for backend development.</li>
        <li>Expert in C# and Java programming languages. well-versed in object-oriented programming concepts and SOLID principles.</li>
        <li>Proficient in HTML, CSS, JavaScript, Bootstrap, jQuery, Tailwind, and React for front-end development.</li>
        <li>Experienced with backend technologies including Node.js, Python, and LAMP Stack.</li>
        <li>Experienced with database management using MySQL, Oracle, PostgreSQL, and Firebase.</li>
        <li>Version control using Git, Unity version control, and GitHub.</li>
        <li>Multimedia Arts: Proficient in graphic design and video editing.</li>
        <li>Proficient in using design tools such as Adobe Photoshop, Premiere Pro, Canva, Figma, and Capcut.</li>
        <li>Strong problem-solving skills and attention to detail.</li>
      </ul>
    </section>
  );
}
