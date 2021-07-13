import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import useStyles from "./styles";
import { fetchPokemon, fetchEvolutionChain } from "../../api/api";
import { IEvolutionItem, IPokemon, ParamTypes } from "../../types/types";
import LoadingSpinner from "../../components/common/loadingSpinner/LoadingSpinner";
import TitleContainer from "../../components/pokemonDetails/TitleContainer";
import Stats from "../../components/pokemonDetails/Stats";
import Image from "../../components/pokemonDetails/Image";
import Abilities from "../../components/pokemonDetails/Abilities";
import Types from "../../components/pokemonDetails/Types";
import Moves from "../../components/pokemonDetails/Moves";
import Evolutions from "../../components/pokemonDetails/Evolutions";

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
    <React.Fragment>
      <div className={classes.toolbar} />
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
                <Image pokemon={pokemon} />
                <Stats stats={pokemon.stats} />
                <Abilities abilities={pokemon.abilities} />
                <Types types={pokemon.types} />
                <Evolutions evolutionChain={evolutionChain} />
                <Moves moves={pokemon.moves} />
              </Grid>
            )
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
