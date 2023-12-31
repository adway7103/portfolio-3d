import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const Carousel = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextProject = () => {
    const newIndex = currentProjectIndex + 1;
    setCurrentProjectIndex(newIndex >= projects.length ? 0 : newIndex);
  };

  const prevProject = () => {
    const newIndex = currentProjectIndex - 1;
    setCurrentProjectIndex(newIndex < 0 ? projects.length - 1 : newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextProject();
      } else if (event.key === "ArrowLeft") {
        prevProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentProjectIndex]);

  // Auto-scroll feature
  useEffect(() => {
    const autoScroll = setInterval(nextProject, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(autoScroll); // Clean up the interval on component unmount
    };
  }, [currentProjectIndex]);

  return (
    <div className="mt-8  w-full lg:h-screen h-[25rem] flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-extrabold mb-10 mt-4">Projects</h1>
      <div className="relative w-3/4 h-3/4 bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl font-bold p-4 text-blue-500"
          onClick={prevProject}
        >
          ←
        </button>
        <motion.div
          key={currentProjectIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-8"
          onClick={() => setSelectedProject(projects[currentProjectIndex])}
        >
          <a
            href={projects[currentProjectIndex].website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-full max-w-full rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
              src={projects[currentProjectIndex].image}
              alt={projects[currentProjectIndex].title}
            />
          </a>
        </motion.div>

        <h2 className="absolute bottom-0 left-0 w-full text-center text-3xl font-bold p-4 bg-white bg-opacity-60">
          {projects[currentProjectIndex].title}
        </h2>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl font-bold p-4 text-blue-500"
          onClick={nextProject}
        >
          →
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentProjectIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
