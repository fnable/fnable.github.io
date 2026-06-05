import profileImg from "../assets/images/lpu.png";
import Tesda from "../assets/images/tesda.png";
import Microsoft from "../assets/images/microsoft.png";
import Certiport from "../assets/images/certiport.png"; 
import useInView from "../hooks/useInView";

export default function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" ref={ref} className={`min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-40 gap-y-8 gap-x-40 py-20 px-10 bg-secondary text-secondary-foreground slide-in ${inView ? "is-visible" : ""}`}>
        <div>
          <h2 className="text-3xl font-bold mb-6">Education and Certifications</h2>
          <h3 className="font-semibold">Bachelor of Science in Information Technology</h3>
          <p>Lyceum of The Philippines University • 2025</p>
          <p>Consistent Dean's List student. Deployed a website hosted using infinityfree for 3rd year Finals. Main C# script programmer of the our thesis using Unity Engine. Graduated Cum Laude with a 1.60 GPA.</p>
          <h3 className="font-semibold">Foundational C# Certification</h3>
          <p>Microsoft • 2024</p>
          <p>Learned the fundamentals of C# programming, including syntax, data types, and control structures.</p>
          <h3 className="font-semibold">Web Development Certification</h3>
          <p>Tesda • 2023</p>
          <p>Completed a comprehensive front-end web development course covering HTML, CSS, JavaScript, PHP, and jQuery.</p>
          <h3 className="font-semibold">Visual Graphic Design Certification</h3>
          <p>Tesda • 2023</p>
          <p>Learned the fundamentals of visual graphic design, including layout, typography, and color theory.</p>
          <h3 className="font-semibold">Java Development Certification</h3>
          <p>Certiport • 2023</p>
          <p>Learned the fundamentals of Java programming, including object-oriented concepts and GUI development.</p>
          <h3 className="font-semibold">IC3 Computing Fundamentals</h3>
          <p>Certiport • 2023</p>
          <p>Gained essential computer skills, including operating systems, software applications, and internet usage.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-50 h-60 mb-6 shadow-lg rounded-3xl"
          />
          <img
            src={Microsoft}
            alt="Profile"
            className="w-50 h-60 mb-6 shadow-lg rounded-3xl"
          />
          <img
            src={Tesda}
            alt="Profile"
            className="w-50 h-60 mb-6 shadow-lg rounded-3xl"
          />
          <img
            src={Certiport}
            alt="Profile"
            className="w-50 h-60 mb-6 shadow-lg rounded-3xl"
          />
        </div>
    </section>
  );
}
