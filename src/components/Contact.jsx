import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();
  return (
    <section id="contact" ref={ref} className={`p-8 bg-secondary text-secondary-foreground slide-in ${inView ? "is-visible" : ""}`}>
      <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
      <p className="text-center">✉︎Gmail: fnable07@gmail.com</p>
      <a href="https://www.facebook.com/fnable07/" target="_blank" rel="noopener noreferrer" className="text-center block mt-2 hover:underline">
        ⓕ Facebook: Francis Nable
      </a>
      <a href="https://www.linkedin.com/in/francis-nable-86364216b/" target="_blank" rel="noopener noreferrer" className="text-center block mt-2 hover:underline">
        Ⓛ LinkedIn: Francis Nable
      </a>
      
    </section>
  );
}
