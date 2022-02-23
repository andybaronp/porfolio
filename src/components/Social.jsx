import { IconButton, Stack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

const Social = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack direction="row" pt="4" justifyContent="end">
      <IconButton
        ml={2}
        icon={<FaGithub />}
        onClick={() => window.open("https://github.com/andybaronp ")}
      />
      <IconButton
        ml={2}
        icon={<FaLinkedin />}
        onClick={() =>
          window.open("https://www.linkedin.com/in/jhoandris-baron/")
        }
      />
      <IconButton
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      />
    </Stack>
  );
};

export default Social;
