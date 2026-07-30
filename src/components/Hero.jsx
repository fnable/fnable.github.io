import profileImg from "../assets/images/profile.jpg";
import useInView from "../hooks/useInView";

export default function Hero() {
  const [ref, inView] = useInView();
  return (
    <section id="hero" ref={ref} className={`pt-10 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 gap-y-8 gap-x-0 text-center bg-secondary text-secondary-foreground slide-in ${inView ? "is-visible" : ""}`}>
      <div>
        <img
          src={profileImg}
          alt="Profile"
          className="w-80 h-100 mb-6 shadow-lg rounded-3xl"
        />
      </div>
      <div>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Francis 👋</h1>
      <p className="text-xl mb-6">
        A passionate Web developer with attention to detail. Learning how to build awesome websites.
      </p>
      <button className="px-6 py-3 rounded-lg hover:opacity-90">
        Contact Me 😁
      </button>
      </div>
    </section>
  );
}
