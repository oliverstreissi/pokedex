import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";

import Header from "./components/common/header/Header";
import PokemonsGrid from "./container/pokemonsGrid/pokemonsGrid";
import PokemonDetails from "./container/pokemonDetails/PokemonDetails";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={PokemonsGrid} />
          <Route path="/pokemon/:pokemonId" component={PokemonDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;