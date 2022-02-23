import { Circle, Flex, Stack, Text, Box } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Image } from "@chakra-ui/image";
const Home = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
      <Image
        alignSelf="center"
        borderRadius="full"
        border="6px solid"
        borderColor="blue.500"
        backgroundColor="transparent"
        boxShadow="lg"
        boxSize="200px"
        src="https://avatars.githubusercontent.com/u/46359791?v=4"
      />
      <Flex alignSelf="flex-start">
        <Box align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mr="8px"
          >
            Jhoandris Barón
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            FrontEnd Developer 💻️ JavaScript | React |
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Home;
