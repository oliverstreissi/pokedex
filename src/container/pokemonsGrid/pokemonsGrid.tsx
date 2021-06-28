import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { fetchAllPokemon } from "../../api/api";
import { IPokemon, IPokemonUrl } from "../../types/types";
import { Grid, Button } from "@material-ui/core";

import PokemonCard from "../../components/pokemonCard/PokemonCard";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";

const PokemonsGrid = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<IPokemonUrl[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 48;

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      fetchAllPokemon(offset, limit).then((data: IPokemonUrl[]) => {
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        {pokemons &&
          pokemons.map((pokemon: IPokemonUrl, index: number) => (
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
  );
};

export default PokemonsGrid;
