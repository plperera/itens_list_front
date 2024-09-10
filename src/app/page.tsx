import { ChakraProvider } from "@chakra-ui/react";
import ItemList from "./components/ItemList";
import customTheme from "./theme/theme";

export default function Home() {
  return (
    <ChakraProvider theme={customTheme}>
      <main>
        <ItemList />      
      </main>
    </ChakraProvider>
  );
}
