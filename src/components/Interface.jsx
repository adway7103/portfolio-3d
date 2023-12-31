import { Icon } from "react-3d-icons";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    title: "Agency Website",
    image: "projects/stayon.png",
    description:
      "In my pursuit of exploring the intersection of creativity and technology, I developed my personal portfolio website using Three.js and react-three-fiber. This project showcases my ability to create interactive 3D elements and integrate them into a web interface, providing a unique and engaging user experience. The website serves as a comprehensive display of my technical skills, projects, and achievements. It stands as a testament to my proficiency in modern web technologies and my passion for creating visually appealing and immersive digital experiences.",
    website: "https://stay-on.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: "projects/portfolio.png",
    description:
      "In my pursuit of exploring the intersection of creativity and technology, I developed my personal portfolio website using Three.js and react-three-fiber. This project showcases my ability to create interactive 3D elements and integrate them into a web interface, providing a unique and engaging user experience. The website serves as a comprehensive display of my technical skills, projects, and achievements. It stands as a testament to my proficiency in modern web technologies and my passion for creating visually appealing and immersive digital experiences.",
    website: "https://adwaylachhiramka.vercel.app/",
  },
  {
    title: "Nike Website Replica",
    image: "projects/nike.jpeg",
    // description:
    // "In my pursuit of exploring the intersection of creativity and technology, I developed my personal portfolio website using Three.js and react-three-fiber. This project showcases my ability to create interactive 3D elements and integrate them into a web interface, providing a unique and engaging user experience. The website serves as a comprehensive display of my technical skills, projects, and achievements. It stands as a testament to my proficiency in modern web technologies and my passion for creating visually appealing and immersive digital experiences.",
    website: "https://nike-adway.vercel.app/",
  },

  {
    title: "Old Portfolio Website",
    image: "projects/port.jpeg",
    // description:
    // "In my pursuit of exploring the intersection of creativity and technology, I developed my personal portfolio website using Three.js and react-three-fiber. This project showcases my ability to create interactive 3D elements and integrate them into a web interface, providing a unique and engaging user experience. The website serves as a comprehensive display of my technical skills, projects, and achievements. It stands as a testament to my proficiency in modern web technologies and my passion for creating visually appealing and immersive digital experiences.",
    website: "https://adway-lachhiramka.netlify.app/",
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
    <div>
      <Section>
        <h1 className="text-6xl italic font-extrabold leading-snug stroke-cyan-700">
          Hi, I'm <br />
          <span className="text-8xl italic text-[#ffd448] ">Adway,</span>
        </h1>
        <motion.p
          className="text-3xl font-bold mt-4 bg-white bg-opacity-50 rounded-3xl px-2"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          A Frontend Web Developer.
        </motion.p>
        <div className="flex space-x-4 mt-16">
          <a
            href="https://app.resumod.co/resume/r/65829153ffc61039c06c5ab0"
            target="_blank"
          >
            <motion.button
              className={`bg-red-600 hover:bg-red-800 text-white sm:py-4 py-4 sm:px-14 px-12 rounded-lg font-bold text-lg`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Get my CV
            </motion.button>
          </a>
          <a href="https://github.com/adway7103" target="_blank">
            <motion.div
              className="text-6xl hover:text-[#ffffffcf] hover:bg-black rounded-full p-[1px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <FaGithub />
            </motion.div>
          </a>
          <a
            href="https://www.linkedin.com/in/adway-lachhiramka-45ab791a9/"
            target="_blank"
          >
            <motion.div
              className="text-6xl text-blue-600 hover:bg-white"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <FaLinkedin />
            </motion.div>
          </a>
        </div>
      </Section>
    </div>
  );
};

const skills = [
  {
    title: "React",
    level: 80,
  },
  {
    title: "Nextjs",
    level: 70,
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
    level: 20,
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
    <div className="">
      <Section>
        <motion.div whileInView={"visible"}>
          <div className="lg:flex  justify-around">
            <div className="w-[30%]">
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
          </div>
        </motion.div>
      </Section>
      <Section>
        {" "}
        <div className="ml-4">
          <div className="text-6xl font-extrabold">About Me</div>
          <motion.h3
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            variants={{
              visible: { opacity: 1, transition: { duration: 1 } },
            }}
          >
            Passionate Software Developer
          </motion.h3>
          <div className="mt-4 md:text-lg text-md text-gray-600">
            <div>
              Hello! I'm a passionate frontend developer currently pursuing my
              Bachelors in Technology(B.Tech) from Kalinga Institute of
              Industrial Technology, Bhubaneshwar(KIIT). I am always eager to
              learn more and improve my skills. I have a strong understanding of
              modern JavaScript frameworks and libraries, and I love the
              challenge of solving complex problems.
            </div>
            <p>
              I have always followed a project making based learning path which
              has helped me a lot in the journey of Web Development. Currently I
              am learning Backend Development and I aspire to be a full-stack
              Developer. I can adapt to any environment and learn things
              quickly.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the great outdoors
              or curled up with a good book. I believe in lifelong learning and
              growth, and I'm excited to take on new and exciting challenges.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="flex justify-center align-middle flex-col mt-8 h-screen">
      <Section>
        <h2 className="text-4xl font-bold justify-center">Contact me</h2>
        <div className="mt-4 mb-2 p-8 rounded-md bg-white w-96 max-w-full">
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
            <button className="bg-indigo-600 text-white py-2 px-8 rounded-lg font-bold text-lg mt-4 ">
              Submit
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
};
