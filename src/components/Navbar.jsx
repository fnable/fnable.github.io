import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);

    function updateActive() {
      let found = ids[0];
      let minDistance = Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 80);
        if (rect.top <= window.innerHeight && distance < minDistance) {
          minDistance = distance;
          found = id;
        }
      });
      setActive(found);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary shadow z-50">
      <ul className="flex justify-center gap-8 py-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`px-2 py-1 transition-colors ${
                active === item.id
                  ? "text-tertiary font-semibold border-b-2 border-tertiary"
                  : "text-primary-foreground hover:text-tertiary"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
