import { Box, Text, SimpleGrid } from "@chakra-ui/layout";
import { GiPriceTag } from "react-icons/gi";
import { DiFirebase, DiReact, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { AiFillCalculator, AiFillHtml5 } from "react-icons/ai";
import Project from "../components/Project";
function Projects() {
  return (
    <Box>
      <Text
        fontSize="5xl"
        textAlign={"center"}
        fontWeight="bold"
        bgGradient="linear(to-r, cyan.300, blue.700 )"
        bgClip="text"
        mr="8px"
      >
        Proyects
      </Text>
      <SimpleGrid
        justifyItems="center"
        p="4"
        minChildWidth="300px"
        spacing="20px"
      >
        {/* ADV CLONE */}
        <Project
          icon1={DiReact}
          icon2={DiFirebase}
          icon3={SiTailwindcss}
          title="Clone ADV"
          description="This a clone of the AscoDeVida.com made with React, TailwindCSS and Firebase ."
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
  );
}

export default Projects;
