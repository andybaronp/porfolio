import { Box, Flex, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { Button, useColorMode } from "@chakra-ui/react";
const Project = ({
  icon1,
  icon2,
  icon3,
  title,
  description,
  urlGithub,
  urlDemo,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex

      rounded="xl"
      direction="column"
      bg={isDark ? "gray.300" : "blue.200"}
      w={"250px"}
      h={"250px"}
      justify="space-around"
      align="center"
    >
      <Box >
        <Icon color="blackAlpha.800" p="1" as={icon1} w="8" h="8" />
        <Icon color="blackAlpha.800" p="1" as={icon2} w="8" h="8" />
        <Icon color="blackAlpha.800" p="1" as={icon3} w="8" h="8" />
      </Box>
      <Box>
        <Text
          color="black"
          fontSize="xl"
          fontWeight="semibold"
          textAlign="center"
        >
          {title}
        </Text>
        <Text p="2" fontSize="md" textalign="center" color="blackAlpha.800">
          {description}
        </Text>
      </Box>
      <Flex pb="1" gap="3">
        <Button
          onClick={() => window.open(urlGithub, "_blank")}
          _hover={{ transform: "scale(1.1)" }}
          bg={isDark ? "cyan.300" : "white"}
        >
          <Text>GitHub</Text>
        </Button>
        <Button
          onClick={() => window.open(urlDemo, "_blank")}
          _hover={{ transform: "scale(1.1)" }}
          bg={isDark ? "cyan.300" : "white"}
        >
          <Text>Demo</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Project;
