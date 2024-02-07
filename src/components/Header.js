import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const withScroll = (WrappedComponent) => {
  return(props) => {
    const [transformFn,setTranslateFn] = useState("translateY(0)");
    let prevScrollPos = window.scrollY;

    useEffect(()=>{
      const handleScroll = (e) => {
        const currentScrollPos = window.scrollY;
        if(currentScrollPos<prevScrollPos) //scrolling up
          setTranslateFn("translateY(0)");
        else //scrolling down
          setTranslateFn("translateY(-200px)");;

        prevScrollPos = currentScrollPos;
      }
      window.addEventListener("scroll", handleScroll);
      return ()=>{
        window.removeEventListener("scroll",handleScroll);
      };
    },[]);

    return <WrappedComponent {...props} transform={transformFn}/>
  }
}

const Header = ({transform}) => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      transform={transform}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(social => <a key={social.url} href={social.url}><FontAwesomeIcon icon={social.icon} size="2x"/></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section" onClick={()=>handleClick("projects")}>Projects</a>
              <a href="/#contactme-section" onClick={()=>handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

const HeaderWithScroll = withScroll(Header);

export default HeaderWithScroll;
