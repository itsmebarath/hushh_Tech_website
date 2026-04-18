import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";
import HushhTechHeader from "../../components/hushh-tech-header/HushhTechHeader";
import HushhTechFooter, { HushhFooterTab } from "../../components/hushh-tech-footer/HushhTechFooter";

/* ── Playfair heading style ── */
const playfair = { fontFamily: "'Playfair Display', serif" };

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen antialiased flex flex-col selection:bg-hushh-blue selection:text-white">
      <HushhTechHeader />

      <Container maxW="container.lg" py={12} px={6} flexGrow={1}>
        <Box textAlign="left" mb={12}>
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-hushh-blue mb-3">
            Legal Agreement
          </p>
          <Heading
            as="h1"
            size="2xl"
            fontWeight="normal"
            style={playfair}
            className="text-black tracking-tight"
          >
            Terms of <span className="text-gray-400 italic font-light">Service.</span>
          </Heading>
          <Text color="gray.500" fontSize="sm" mt={4} fontWeight="light">
            Last Updated: February 18, 2025
          </Text>
        </Box>

        <VStack spacing={10} align="stretch">
          <section>
            <Heading as="h2" size="md" mb={4} fontWeight="semibold" className="tracking-tight">
              1. Agreement to Terms
            </Heading>
            <Text color="gray.600" lineHeight="tall" fontWeight="light">
              By accessing or using the Hushh Technologies Website (the “Website”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please do not use the Website. These Terms apply to all visitors, users, and others who access the Website.
            </Text>
          </section>

          <Divider borderColor="gray.100" />

          <section>
            <Heading as="h2" size="md" mb={4} fontWeight="semibold" className="tracking-tight">
              2. Eligibility
            </Heading>
            <Text color="gray.600" lineHeight="tall" fontWeight="light">
              You must be at least 18 years of age to use this Website. By using this Website, you represent and warrant that you are at least 18 years of age and have the full right, power, and authority to enter into these Terms and to fully perform all of your obligations hereunder.
            </Text>
          </section>

          <Divider borderColor="gray.100" />

          <section>
            <Heading as="h2" size="md" mb={4} fontWeight="semibold" className="tracking-tight">
              3. Intellectual Property Rights
            </Heading>
            <Text color="gray.600" lineHeight="tall" fontWeight="light">
              All content on the Website, including text, graphics, logos, icons, images, audio clips, and software, is the property of Hushh Technologies LLC or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.
            </Text>
          </section>

          <Divider borderColor="gray.100" />

          <section>
            <Heading as="h2" size="md" mb={4} fontWeight="semibold" className="tracking-tight">
              4. Prohibited Uses
            </Heading>
            <Text color="gray.600" lineHeight="tall" fontWeight="light" mb={3}>
              You agree not to use the Website:
            </Text>
            <VStack align="start" pl={6} spacing={2} color="gray.600" fontWeight="light">
              <Text>• In any way that violates any applicable federal, state, local, or international law.</Text>
              <Text>• To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website.</Text>
              <Text>• To attempt to gain unauthorized access to any parts of the Website or the server on which it is stored.</Text>
            </VStack>
          </section>

          <Divider borderColor="gray.100" />

          <section>
            <Heading as="h2" size="md" mb={4} fontWeight="semibold" className="tracking-tight">
              5. Disclaimers
            </Heading>
            <Text color="gray.600" lineHeight="tall" fontWeight="light">
              The Website and its content are provided on an "as is" and "as available" basis without any warranties of any kind. Hushh Technologies LLC does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </Text>
            <Text mt={4} color="gray.600" lineHeight="tall" fontWeight="light" fontStyle="italic">
              Investing involves risk, including possible loss of principal. Content on this site is for informational purposes only and does not constitute financial or legal advice.
            </Text>
          </section>

          <Divider borderColor="gray.100" />

          <section className="pb-20">
            <Heading as="h2" size="md" mb={4} fontWeight="semibold" className="tracking-tight">
              6. Contact Us
            </Heading>
            <Text color="gray.600" lineHeight="tall" fontWeight="light">
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto: legal@hushh.ai" className="text-hushh-blue font-medium underline underline-offset-4 decoration-hushh-blue/30">
                legal@hushh.ai
              </a>
            </Text>
          </section>
        </VStack>
      </Container>

      <HushhTechFooter activeTab={HushhFooterTab.HOME} />
    </div>
  );
};

export default TermsOfServicePage;
