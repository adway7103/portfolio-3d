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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-extrabold mb-8 text-blue-500">Projects</h1>
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
          <img
            className="max-h-full max-w-full rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
            src={projects[currentProjectIndex].image}
            alt={projects[currentProjectIndex].title}
          />
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

      {selectedProject && (
        <Dialog
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0" />
            <div className="bg-white rounded-lg w-[40rem] mx-auto p-6 space-y-6">
              <Dialog.Title className="text-2xl font-bold">
                {" "}
                {selectedProject.title}{" "}
              </Dialog.Title>
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={selectedProject.image}
                alt={selectedProject.title}
              />
              <p className="font-semibold">{selectedProject.description}</p>
              <button
                onClick={() => (window.location.href = selectedProject.link)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Go to Project
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Carousel;
