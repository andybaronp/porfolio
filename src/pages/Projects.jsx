import React from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiFirebase, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Button, useColorMode } from "@chakra-ui/react";
function Projects() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box>
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">
        Proyects
      </Text>
      <SimpleGrid
        justifyItems="center"
        p="4"
        minChildWidth="300px"
        spacing="20px"
      >
        <Flex
          rounded="xl"
          direction="column"
          bg={isDark ? "gray.300" : "cyan.100"}
          w={{ base: "300px", md: "350px" }}
          h={{ base: "300px", md: "350px" }}
          justify="space-between"
          align="center"
          _hover={{ bg: "blue.200" }}
        >
          <Box>
            <Icon color="black" p="4" as={DiReact} w="16" h="16" />
            <Icon color="black" p="4" as={DiFirebase} w="16" h="16" />
            <Icon color="black" p="4" as={SiTailwindcss} w="16" h="16" />
          </Box>

          <Text
            color="black"
            p="4"
            fontSize="xl"
            fontWeight="semibold"
            textAlign="center"
          >
            Clone ADV
            <Text
              p="1"
              fontSize="smaller"
              textAlign="center"
              color="blackAlpha.800"
            >
              This a clone of the AscoDeVida.com, made with React, Firebase and
              TailwindCSS.
            </Text>
          </Text>
          <Flex py="2">
            <Button
              onClick={() =>
                window.open("https://github.com/andybaronp/clone-asco-de-vida")
              }
              mr="2"
              _hover={{ bg: "gray.300" }}
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                color="black"
                fontSize="xl"
                fontWeight="semibold"
              >
                <Text>GitHub</Text>
              </a>
            </Button>
            <Button
              onClick={() =>
                window.open(" https://clone-asco-de-vida.vercel.app/")
              }
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                color="black"
                fontSize="xl"
                fontWeight="semibold"
              >
                <Text>Demo</Text>
              </a>
            </Button>
          </Flex>
        </Flex>
        {/* 2 */}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
