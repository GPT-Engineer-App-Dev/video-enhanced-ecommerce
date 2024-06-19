import { Box, Button, Container, Flex, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="lg">Kive</Heading>
        <HStack spacing={4}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Product
            </MenuButton>
            <MenuList>
              <MenuItem>Library</MenuItem>
              <MenuItem>Generate</MenuItem>
              <MenuItem>Search</MenuItem>
              <MenuItem>Moodboards</MenuItem>
              <MenuItem>Stories</MenuItem>
              <MenuItem>Video</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="link">Solutions</Button>
          <Button variant="link">Pricing</Button>
          <Button variant="link">Careers</Button>
          <Button variant="link">Log in</Button>
          <Button colorScheme="teal">Sign up</Button>
        </HStack>
      </Flex>
      <VStack spacing={4} textAlign="center">
        <Heading as="h2" size="2xl">Where creative AI gets to work</Heading>
        <Text fontSize="lg">
          Kive is the all-in-one platform to generate ideas, produce professional content, organise assets and build brands with AI.
        </Text>
        <Button colorScheme="teal" size="lg">Get started</Button>
      </VStack>
    </Container>
  );
};

export default Index;