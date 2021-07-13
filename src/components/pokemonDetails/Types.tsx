import { Grid, Typography } from "@material-ui/core";
import { Type } from "../../types/types";
import useStyles from "./styles";

export default function Types({ types }: { types: Type[] }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subtitle}>Type</Typography>
      <Typography className={classes.text}>
        {types.map((type) => type.type.name).join(", ")}
      </Typography>
    </Grid>
  );
}
