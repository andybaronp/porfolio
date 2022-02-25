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
      w={"300px"}
      h={"300px"}
      justify="space-between"
      align="center"
    >
      <Box>
        <Icon color="blackAlpha.800" p="4" as={icon1} w="16" h="16" />
        <Icon color="blackAlpha.800" p="4" as={icon2} w="16" h="16" />
        <Icon color="blackAlpha.800" p="4" as={icon3} w="16" h="16" />
      </Box>
      <Box>
        <Text
          color="black"
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
        >
          {title}
        </Text>
        <Text p="2" fontSize="xl" textalign="center" color="blackAlpha.800">
          {description}
        </Text>
      </Box>
      <Flex py="2" gap="4">
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
