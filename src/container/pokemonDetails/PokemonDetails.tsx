import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "../../components/pokemonDetails/styles";
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { fetchPokemon, fetchEvolutionChain } from "../../api/api";
import { IEvolutionItem, IPokemon, ParamTypes } from "../../types/types";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";
import TitleContainer from "../../components/pokemonDetails/TitleContainer";
import ImageStatsContainer from "../../components/pokemonDetails/ImageStatsContainer";
import TypeAbilitiesContainer from "../../components/pokemonDetails/TypeAbilitiesContainer";
import EvolutionMovesContainer from "../../components/pokemonDetails/EvolutionMovesContainer";

export default function PokemonDetails() {
  const classes = useStyles();
  const { pokemonId } = useParams<ParamTypes>();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [evolutionChain, setEvolutionChain] = useState<IEvolutionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      fetchPokemon(url).then((data) => {
        setPokemon(data);

        fetchEvolutionChain(data.species).then((data) => {
          setEvolutionChain(data);
          setIsLoading(false);
        });
      });
    };

    fetchData();
  }, [pokemonId]);

  return (
    <Card className={classes.card}>
      <CardActions>
        <Button
          onClick={() => history.push("/")}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          size="medium"
          color="secondary"
        >
          Back
        </Button>
      </CardActions>
      <CardContent>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          pokemon &&
          evolutionChain && (
            <Grid container spacing={5}>
              <TitleContainer pokemon={pokemon} />
              <ImageStatsContainer pokemon={pokemon} />
              <TypeAbilitiesContainer pokemon={pokemon} />
              <EvolutionMovesContainer
                pokemon={pokemon}
                evolutionChain={evolutionChain}
              />
            </Grid>
          )
        )}
      </CardContent>
    </Card>
  );
}
