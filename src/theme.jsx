import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme(theme, {
  config: {
    initialColorMode: "light",
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
});
