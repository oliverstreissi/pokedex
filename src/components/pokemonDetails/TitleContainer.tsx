import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { IPokemon } from "../../types/types";

export default function TitleContainer({ pokemon }: { pokemon: IPokemon }) {
  const classes = useStyles();

  return (
    <Grid item container justify="center" alignItems="center">
      <Grid item>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.title}
        >
          # {pokemon.order}
        </Typography>
      </Grid>
      <Grid item xs={12} sm>
        <Typography variant="h2" className={classes.title}>
          {pokemon.name}
        </Typography>
      </Grid>
    </Grid>
  );
}