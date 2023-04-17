import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};