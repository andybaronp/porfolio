import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme(theme, {
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
});
