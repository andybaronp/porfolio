import { Circle, Flex, Stack, Text, Box, SimpleGrid } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Image } from "@chakra-ui/image";
import { DiCss3, DiFirebase, DiJavascript1, DiReact } from "react-icons/di";
import { SiSupabase, SiTailwindcss } from "react-icons/si";
import Project from "../components/Project";
import { AiFillCalculator, AiFillHtml5 } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import Projects from "./Projects";
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
      <Flex alignSelf="center">
        <Box align="flex-start">
          <Text fontSize="4xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mr="8px"
          >
            Jhoandris Barón
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"} fontSize="xl">
            FrontEnd Developer 💻️ JavaScript | Css | Html | React |
          </Text>
          <Box>
            <Text
              fontSize="5xl"
              textAlign={"center"}
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.300, blue.700 )"
              bgClip="text"
              my='2'
            >
              Proyects
            </Text>
            <SimpleGrid justifyItems="center" minChildWidth="200px" gap="3" mb="2">
              {/* ADV CLONE */}
              <Project
                icon2={DiReact}
                icon1={SiSupabase}
                icon3={SiTailwindcss}
                title="Game Faster"
                description="This a clone of the AscoDeVida.com made with React, TailwindCSS and Firebase."
                urlGithub="https://github.com/andybaronp/game-faster"
                urlDemo="https://game-faster-two.vercel.app/"
              />
              {/* ADV CLONE */}
              <Project
                icon1={DiReact}
                icon2={DiFirebase}
                icon3={SiTailwindcss}
                title="Clone ADV"
                description="This a clone of the AscoDeVida.com made with React, TailwindCSS and Firebase."
                urlGithub="https://github.com/andybaronp/clone-asco-de-vida"
                urlDemo="https://clone-asco-de-vida.vercel.app/"
              />
              {/* CALCULATOR */}
              <Project
                icon1={AiFillCalculator}
                icon2={AiFillHtml5}
                icon3={DiCss3}
                title=" Tip Calculator App"
                description=" This is a FrontendMentor challenge solved with Js Vanilla Css and
              HTML"
                urlGithub="https://github.com/andybaronp/tip-calculator"
                urlDemo="https://andybaronp.github.io/tip-calculator/"
              />
              <Project
                icon1={DiReact}
                icon2={DiCss3}
                icon3={AiFillHtml5}
                title="Movies-React"
                description=" A   App  for  search Movies  made with React, CSS and HTML."
                urlGithub="https://github.com/andybaronp/Movies-React"
                urlDemo="https://movies-react-neon.vercel.app/ "
              />

              <Project
                icon1={GiPriceTag}
                icon2={AiFillHtml5}
                icon3={DiCss3}
                title="Simple, traffic-based pricing calculator"
                description="This is a FrontendMentor challenge solved with Js Vanilla Css and HTML"
                urlGithub="https://github.com/andybaronp/Simple-traffic-based-pricing"
                urlDemo="https://andybaronp.github.io/Simple-traffic-based-pricing/"
              />
              <Project
                icon1={DiJavascript1}
                icon2={DiCss3}
                icon3={AiFillHtml5}
                title="Search lyrics - Vanilla js"
                description="Lyrics search engine with Js Vanilla Css and HTML"
                urlGithub="https://github.com/andybaronp/search-lyrics"
                urlDemo="https://andybaronp.github.io/search-lyrics/"
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>

    </Stack>
  );
};

export default Home;
