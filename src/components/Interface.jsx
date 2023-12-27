import { Icon } from "react-3d-icons";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAtom } from "jotai";
import Carousel from "./Carousel";
const projects = [
  {
    title: "MLSA KIIT Official Website",
    image: "/projects/mlsa.png",
    description:
      "As a Microsoft Student Learn Ambassador (MLSA) at KIIT, I had the opportunity to collaborate on the development of our community’s website. This project, built with Next.js, was a significant learning experience for me. I was responsible for the majority of the frontend development, which allowed me to deepen my understanding of various concepts and tools. This project is a testament to my ability to work in a team and my commitment to learning and growth.",
    website: "https://www.mlsakiit.com/",
  },
  {
    title: "Portfolio Website",
    image: "projects/portfolio.png",
    description:
      "In my pursuit of exploring the intersection of creativity and technology, I developed my personal portfolio website using Three.js and react-three-fiber. This project showcases my ability to create interactive 3D elements and integrate them into a web interface, providing a unique and engaging user experience. The website serves as a comprehensive display of my technical skills, projects, and achievements. It stands as a testament to my proficiency in modern web technologies and my passion for creating visually appealing and immersive digital experiences.",
    website: "https://adwaylachhiramka.vercel.app/",
  },
];
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Carousel projects={projects} />
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-8xl italic font-extrabold leading-snug stroke-cyan-700">
        Hi, I'm
        <br />
        <span className="px-5 italic text-indigo-600 bg-white bg-opacity-50 rounded-3xl p-1">
          Adway
        </span>
      </h1>
      <motion.p
        className="text-4xl font-bold mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        A Frontend Web Developer
      </motion.p>
      <a
        href="https://app.resumod.co/resume/r/65829153ffc61039c06c5ab0"
        target="_blank"
      >
        <motion.button
          className={`bg-red-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          My Resume
        </motion.button>
      </a>
    </Section>
  );
};

const skills = [
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nextjs",
    level: 90,
  },
  {
    title: "Java",
    level: 70,
  },
  {
    title: "Python",
    level: 65,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 40,
  },
];
const languages = [
  {
    title: "English",
    level: 100,
  },
  {
    title: "Hindi",
    level: 100,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <div className="w-[80rem] lg:flex justify-between">
          <div className="w-[30rem]">
            <h2 className="text-6xl font-extrabold p-2 px-2">Skills</h2>
            <div className=" mt-8 space-y-4">
              {skills.map((skill, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-gray-800"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {skill.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full "
                      style={{ width: `${skill.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50rem]">
            <div className="text-6xl font-extrabold">About Me</div>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                },
              }}
            ></motion.h3>
            <div></div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <div className="flex justify-center align-middle flex-col">
      <Section>
        <h2 className="text-5xl font-bold justify-center">Contact me</h2>
        <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
          <form>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
              Submit
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
};
