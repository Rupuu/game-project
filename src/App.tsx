import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HelpPage from "./pages/Help";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`, //1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg"></Show>
      <GridItem area="main">
        <HelpPage />
      </GridItem>
    </Grid>
  );
}

export default App;
