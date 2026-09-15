import { useState } from "react";
import useInView from "../hooks/useInView";
import ProjectCategory from "./ProjectCategory";
import Todo from "../assets/images/todo.jpg";
import Weather from "../assets/images/weather.jpg";
import Website from"../assets/images/website.jpg";
import Timekeeping from"../assets/images/timekeeping.jpg";
import Backend from"../assets/images/backend.jpg";
import Patient from"../assets/images/patient.jpg";
import StoryBoard from"../assets/images/storyboard.jpg";
import UnityGame from"../assets/images/unitygame.jpg";
import RobloxGame from"../assets/images/robloxgame.jpg";
import NablePoster from"../assets/images/NablePoster.jpg";
import Edits from"../assets/images/edits.jpg";

export default function Projects() {
  const [ref, inView] = useInView();
  const [openCategory, setOpenCategory] = useState("webDevelopment");

  const projects = {
    webDevelopment: [
      {
        title: "To-Do App",
        description: "A simple task manager built in React.",
        image: Todo,
        alt: "To-Do App",
      },
      {
        title: "Weather App",
        description: "Shows live weather using an API built in React.",
        image: Weather,
        alt: "Weather App",
      },
      {
        title: "Portfolio Website",
        description:
          "My personal portfolio built with React and Tailwind.",
        image: null,
        alt: "",
      },
      {
        title: "Company Website",
        description: "A full-stack blog using vanilla web development for the frontend.",
        image: Website,
        alt: "Company Website",
      },
      {
        title: "Employee Timekeeping System",
        description: "An employee timekeeping system built using Laravel and vanilla web development..",
        image: Timekeeping,
        alt: "Employee Timekeeping System",
      },
      {
        title: "Company Backend API System",
        description: "A RESTful API system built using Laravel for backend operations.",
        image: Backend,
        alt: "Company Backend API System",
      },
      {
        title: "Patient Plan Form",
        description: "A patient plan form for my freelance client built using vanilla html, css, and javascript.",
        image: Patient,
        alt: "Patient Plan Form",
      },
      {
        title: "Story Board",
        description: "A story board for my freelance client built using vanilla html, css, and javascript.",
        image: StoryBoard,
        alt: "Story Board",
      },
    ],

    gameDevelopment: [
      {
        title: "Roblox Simulator game",
        description:
          "I scripted some gameplay mechanics for this Roblox game using Lua.",
        image: RobloxGame,
        alt: "Roblox Simulator game",
      },
      {
        title: "Escape Route",
        description:
          "A 3rd person multiplayer fire escape simulation game built in Unity. I was responsible for scripting the player movement, camera controls, in-game interactions, UI interactions, and implementing the multiplayer functionality using Photon Unity Networking (PUN).",
        image: UnityGame,
        alt: "Escape Route",
      },
    ],

    multiMediaArts: [
      {
        title: "Gym poster",
        description:
          "A poster I made for a local gym.",
        image: NablePoster,
        alt: "Gym poster",
      },
      {
        title: "TikTok edits",
        description:
          "I made tiktok edits for promotion and entertainment purposes.",
        image: Edits,
        alt: "TikTok edits",
      },
    ],
  };

  const toggleCategory = (category) => {
    setOpenCategory(
      openCategory === category ? null : category
    );
  };

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

      <ProjectCategory
        title="Web Development"
        projects={projects.webDevelopment}
        isOpen={openCategory === "webDevelopment"}
        onToggle={() => toggleCategory("webDevelopment")}
      />

      <ProjectCategory
        title="Game Development"
        projects={projects.gameDevelopment}
        isOpen={openCategory === "gameDevelopment"}
        onToggle={() => toggleCategory("gameDevelopment")}
      />
      <ProjectCategory
        title="Multi-Media Arts"
        projects={projects.multiMediaArts}
        isOpen={openCategory === "multiMediaArts"}
        onToggle={() => toggleCategory("multiMediaArts")}
      />
    </section>
  );
}