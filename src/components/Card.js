import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url, framework, isValidFramework, languages, isValidLanguage, libraries,  isValidLibraries}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<VStack borderRadius="lg" bgColor='white'>
            <Image src={imageSrc} alt='project-1' borderRadius="lg"/>
            <VStack p="2rem" align="flex-start">
              <Heading textAlign="left" color="black" as="h6" size='md'>{title}</Heading>
              <Text color="grey" size="xs">{description}</Text>
              {isValidFramework && <Text color="black" size="xs"><strong>{`Frontend Frameworks: `}</strong><span style={{color: "#333333", fontWeight: "600"}}>{`${framework}`}</span></Text>}
              {isValidLanguage && <Text color="black" size="xs"><strong>{`Languages: `}</strong><span style={{color: "#333333", fontWeight: "600"}}>{`${languages}`}</span></Text>}
              {isValidLibraries && <Text color="black" size="xs"><strong>{`Libraries/Packages: `}</strong><span style={{color: "#333333", fontWeight: "600"}}>{`${libraries}`}</span></Text>}
              <HStack>
                <Text fontFamily="SFMono-Regular,Menlo,Monaco,Consolas,monospace"fontWeight="bold" color="black" size="xs">
                  <a key={title} href={url} style={{color:"grey"}}>See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></a>
                </Text>
              </HStack>
            </VStack>
          </VStack>);
};

export default Card;
