import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Kimberley!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={12}>
      <VStack spacing={5}>
        <Avatar src={require("../images/profile.jpg")} size="2xl"></Avatar>
        <Heading as="h6" size='xs'>{greeting}</Heading>
      </VStack>
      <VStack spacing={5}>
        <Heading as="h1" textAlign="center">{bio1}</Heading>
        <Heading as="h1" textAlign="center">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
