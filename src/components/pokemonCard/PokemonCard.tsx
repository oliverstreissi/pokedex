import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { fetchPokemon } from "../../api/api";
import { IPokemon, IPokemonUrl } from "../../types/types";

export default function PokemonCard({ pokeData }: { pokeData: IPokemonUrl }) {
  const classes = useStyles();
  const history = useHistory();
  const [pokemon, setPokemon] = useState<IPokemon>();

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      fetchPokemon(pokeData.url).then((data) => {
        setPokemon(data);
      });
    };

    fetchData();
  }, [pokeData]);

  return (
    <Card className={classes.root}>
      {pokemon && (
        <CardActionArea onClick={() => history.push("/pokemon/" + pokemon.id)}>
          <CardContent>
            <img
              src={pokemon.picture}
              alt={pokemon.name}
              className={classes.picture}
            />
            <Typography variant="h6" className={classes.name}>
              {pokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
}
