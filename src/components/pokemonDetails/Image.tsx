import { Grid } from "@material-ui/core";
import { IPokemon } from "../../types/types";
import useStyles from "./styles";

export default function Image({ pokemon }: { pokemon: IPokemon }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <img
        src={pokemon.picture}
        alt={pokemon.name}
        className={classes.picture}
      />
    </Grid>
  );
}
