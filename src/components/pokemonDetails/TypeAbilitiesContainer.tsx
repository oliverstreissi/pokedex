import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { IPokemon } from "../../types/types";
import useStyles from "./styles";

export default function TitleContainer({ pokemon }: { pokemon: IPokemon }) {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.containerMarginTop}
      justify="center"
    >
      <Grid item xs={12} sm={6}>
        <Typography className={classes.subtitle}>Type</Typography>
        <Typography className={classes.text}>
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.subtitle}>Abilities</Typography>
        <Typography className={classes.text}>
          {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </Typography>
      </Grid>
    </Grid>
  );
}
