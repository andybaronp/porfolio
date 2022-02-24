import { Box, Container, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { FaCodepen, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import Social from "./Social";
const Layout = ({ children }) => {
  return (
    <Container px="6" maxWidth="container.xl">
      <Social />

      <Flex
        direction={{ base: "column", md: "row" }}
        h={{ base: "auto", md: "100%" }}
      >
        <Stack
          spacing="5"
          py="4"
          direction={{ base: "row", md: "column" }}
          align={["center", "flex-start"]}
          justifyContent={["center", "flex-start"]}
        >
          <Link to="/">
            <Icon as={AiOutlineHome} height="8" width="8" />
          </Link>
          <Link to="/">
            <Stack direction="row" alignItems="center" spacing="3">
              <Icon as={FaBookReader} />
              <Text>About</Text>
            </Stack>
          </Link>
          <Link to="/projects">
            <Stack direction="row" alignItems="center" spacing="3">
              <Icon as={FaCodepen} />
              <Text>Projects</Text>
            </Stack>
          </Link>
        </Stack>
        <Box width="100%" px={4}>
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default Layout;
