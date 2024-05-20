import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HelpPage from "./pages/Help";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="skyblue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <HelpPage />
      </GridItem>
    </Grid>
  );
}

export default App;
