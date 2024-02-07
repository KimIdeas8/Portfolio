import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant Website | Built with React.js",
    description:
      "A website app that is built to suit the needs of a fictional client persona, a restaurant. ",
    getImageSrc: () => require("../images/photo1.png"),
    url: "https://little-lemon-react-web-app.vercel.app/"
  },
  {
    title: "Mangata & Gallo Website | Built purely using HTML & CSS",
    description:
      "A website that is built to suit the needs of a fictional client persona, a jewellery retailer.",
    getImageSrc: () => require("../images/photo2.png"),
    url:"https://html-css-website-one.vercel.app/"
  },

];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
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
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
