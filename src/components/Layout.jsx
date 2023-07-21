import { Box, Container, Divider, Flex, Icon, Stack } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { FaCodepen, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import ItemSidebar from "./ItemSidebar";
import Social from "./Social";
const Layout = ({ children }) => {
  return (
    <Container px="6" maxWidth="container.xl"  >
      <Social />

      <Flex
        direction={{ base: "column", md: "row" }}
        h={{ base: "auto", md: "100%" }}
      >
        <Stack
          w={{ base: "100%", md: "300px" }}
          h={{ base: "100%", md: "auto" }}
          spacing="4"
          py="4"
          px="4"
          direction={{ base: "row", md: "column" }}
          align={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {/* Items Sidebar */}
          <Stack
            divider={<Divider borderColor="gray.500" />}
            spacing="6"
            w="100%"
            direction={{ base: "row", md: "column" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Link to="/">
              <Icon
                as={AiOutlineHome}
                height="8"
                width="8"
                _hover={{ color: "blue.500", transform: "scale(1.2)" }}
              />
            </Link>

            <Link to="/">
              <ItemSidebar icon={FaBookReader} title="About" />
            </Link>
            <Link to="/projects">
              <ItemSidebar icon={FaCodepen} title="Projects" />
            </Link>
          </Stack>
          {/* End Item Sidebar */}
        </Stack>
        <Box width="100%" px={4}>
          {children}
        </Box>
      </Flex>
    </Container >
  );
};

export default Layout;
