import { Grid, Typography } from "@material-ui/core";
import { Ability } from "../../types/types";
import useStyles from "./styles";

export default function Abilities({ abilities }: { abilities: Ability[] }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subtitle}>Abilities</Typography>
      <Typography className={classes.text}>
        {abilities.map((ability) => ability.ability.name).join(", ")}
      </Typography>
    </Grid>
  );
}
