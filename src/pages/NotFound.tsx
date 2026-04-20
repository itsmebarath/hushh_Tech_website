import React from 'react';
import { Box, Heading, Text, Button, VStack, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box minH="70vh" display="flex" alignItems="center" bg="white" py={20}>
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <Container maxW="container.md" textAlign="center">
        <VStack spacing={8}>
          <Heading
            as="h1"
            fontSize={{ base: "8xl", md: "9xl" }}
            className="blue-gradient-text"
            fontWeight="900"
            lineHeight="1"
          >
            404
          </Heading>
          
          <VStack spacing={3}>
            <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} color="gray.900" fontWeight="300">
              Lost in the <Text as="span" className="italic font-light text-gray-400">Future?</Text>
            </Heading>
            <Text fontSize="lg" color="gray.500" maxW="md" fontWeight="300">
              The investment path you're looking for doesn't exist or has been moved.
            </Text>
          </VStack>

          <Button
            size="lg"
            px={10}
            height="56px"
            borderRadius="full"
            bg="black"
            color="white"
            _hover={{ bg: "gray.800", transform: "translateY(-2px)" }}
            transition="all 0.2s"
            onClick={() => navigate('/')}
            fontWeight="500"
          >
            Back to Safety
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
