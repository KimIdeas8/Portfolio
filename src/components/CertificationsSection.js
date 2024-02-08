import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cert from "./Cert";

const certifications = [
  {
    getImageSrc: () => ("https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/90640795"),
  },
  {
    getImageSrc: () => ("https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~H223W43X6TK6/CERTIFICATE_LANDING_PAGE~H223W43X6TK6.jpeg"),
  },
  {
    getImageSrc: () => ("https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7MJGYDVKMBRC/CERTIFICATE_LANDING_PAGE~7MJGYDVKMBRC.jpeg"),
  },
  {
    getImageSrc: () => ("https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4PDA9QPDGCDJ/CERTIFICATE_LANDING_PAGE~4PDA9QPDGCDJ.jpeg"),
  },
  {
    getImageSrc: () => ("https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KLTVXRBE89CN/CERTIFICATE_LANDING_PAGE~KLTVXRBE89CN.jpeg"),
  },
  {
    getImageSrc: () => ("https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YLXQLNAMEKYY/CERTIFICATE_LANDING_PAGE~YLXQLNAMEKYY.jpeg"),
  },


];

const CertificationsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="white"
      color="black"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="certs-section">
        Attained Certifications
      </Heading>
      <Box
        display="flex"
        overflow="scroll"
        gap={8}
      >
        {certifications.map((certification) => (
          <Cert
            key={certification.title}
            title={certification.title}
            description={certification.description}
            imageSrc={certification.getImageSrc()}
            url={certification.url}
            framework={certification.framework}
            isValidFramework={certification.isValidFramework}
            languages={certification.languages}
            isValidLanguage={certification.isValidLanguage}
            libraries={certification.libraries}
            isValidLibraries={certification.isValidLibraries}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CertificationsSection;
