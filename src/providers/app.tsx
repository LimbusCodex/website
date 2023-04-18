import { Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ForceColorMode, theme } from "./theme";

interface Props {
  children: ReactNode;
}

const ErrorFallback = () => (
  <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100vw" h="100vw"
      gap={5}>
    <Heading>something went wrong :(</Heading>
    <Button size="lg" onClick={() => window.location.assign(window.location.origin)}>
      Refresh
    </Button>
  </Flex>
);

// TODO: React.Suspense
export const AppProvider = ({ children }: Props) => (
  <ChakraProvider theme={theme}>
    <ForceColorMode />
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </ChakraProvider>
);