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
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleNavClick = (id) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary shadow z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" onClick={() => setActive("")} className="text-lg font-semibold text-primary-foreground">
          Francis' Portfolio
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-primary-foreground transition hover:bg-white/20"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 text-primary-foreground transition hover:bg-white/20 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className={`mb-1 block h-0.5 w-5 bg-current transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`mb-1 block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} border-t border-white/20 bg-primary md:block`}>
        <ul className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-end md:gap-8 md:px-6 md:py-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block px-2 py-1 transition-colors ${
                  active === item.id
                    ? "font-semibold text-tertiary"
                    : "text-primary-foreground hover:text-tertiary"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
