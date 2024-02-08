import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Portfolio Website | Built with React.js",
    description:
      "A portfolio website that was developed to showcase my personal certifications and projects. Its the very website you are visiting right now.",
    getImageSrc: () => require("../images/project1.png"),
    framework: "React.js",
    isValidFramework: true,
    languages: "JavaScript ES6, HTML5, CSS",
    isValidLanguage: true,
    libraries: "Formik, Yup, Chakra UI, font-awesome",
    isValidLibraries: true,
    url:"https://portfolio-ten-omega-67.vercel.app/"
  },
  {
    title: "Little Lemon Restaurant Website | Built with React.js",
    description:
      "A website app that is built to suit the needs of a fictional client persona, a restaurant. Implemented a form with HTML5 validation and JavaScript functions to handle table bookings for the restaurant.",
    getImageSrc: () => require("../images/project2.png"),
    framework: "React.js",
    isValidFramework: true,
    languages: "JavaScript ES6, HTML5, CSS",
    isValidLanguage: true,
    libraries: "React Testing Library, Jest",
    isValidLibraries: true,
    url: "https://little-lemon-react-web-app.vercel.app/"
  },
  {
    title: "Calculator Web Application | Built with React.js",
    description:
      "A calculator web application that is built to perform simple maths operations addition, subtraction, multiplication and division.",
    getImageSrc: () => require("../images/project3.png"),
    framework: "React.js",
    isValidFramework: true,
    languages: "JavaScript ES6, HTML5, CSS",
    isValidLanguage: true,
    isValidLibraries: false,
    url:"https://calculator-react-app-indol.vercel.app/"
  },
  {
    title: "Mangata & Gallo Website | Built purely using HTML, CSS and Javascript ES6",
    description:
      "A website that is built to suit the needs of a fictional client persona, a jewellery retailer.",
    getImageSrc: () => require("../images/project4.png"),
    isValidFramework: false,
    languages: "JavaScript ES6, HTML5, CSS",
    isValidLanguage: true,
    isValidLibraries: false,
    url:"https://html-css-website-one.vercel.app/"
  },

];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#edefee"
      color="black"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            framework={project.framework}
            isValidFramework={project.isValidFramework}
            languages={project.languages}
            isValidLanguage={project.isValidLanguage}
            libraries={project.libraries}
            isValidLibraries={project.isValidLibraries}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
