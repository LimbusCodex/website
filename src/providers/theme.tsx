import { ColorModeScript, ThemeOverride, extendTheme, useColorMode, } from "@chakra-ui/react";
import { useEffect } from "react";

const base: ThemeOverride = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
};

export const theme = extendTheme(base);


export const ForceColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  return <ColorModeScript initialColorMode="dark" />;
};