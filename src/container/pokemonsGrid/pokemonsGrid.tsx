import React, { useState, useEffect } from "react";
import { fetchAllPokemon } from "../../api/api";
import { IPokemon } from "../../types/types";
import { Grid, Button } from "@material-ui/core";

import useStyles from "./styles";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";

export default function PokemonsGrid() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 48;

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      fetchAllPokemon(offset, limit).then((data: IPokemon[]) => {
        setPokemons((prevPokemons) => [...prevPokemons, ...data]);
        setIsLoading(false);
      });
    };
    fetchData();
  }, [offset]);

  const loadMore = (): void => {
    setIsLoading(true);
    setOffset(offset + limit);
  };

  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {pokemons &&
            pokemons.map((pokemon: IPokemon, index: number) => (
              <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                <PokemonCard pokeData={pokemon} />
              </Grid>
            ))}
        </Grid>
        <div className={classes.spinnerWrapper}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={loadMore}
            >
              Load more
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
