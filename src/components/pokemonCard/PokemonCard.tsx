import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { IPokemon } from "../../types/types";
import useStyles from "./styles";

export default function PokemonCard({ pokeData }: { pokeData: IPokemon }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      {pokeData && (
        <CardActionArea onClick={() => history.push("/pokemon/" + pokeData.id)}>
          <CardContent>
            <img
              src={pokeData.picture}
              alt={pokeData.name}
              className={classes.picture}
            />
            <Typography variant="h6" className={classes.name}>
              {pokeData.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
}
