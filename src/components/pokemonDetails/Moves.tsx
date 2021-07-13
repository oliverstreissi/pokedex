import { Grid, Typography } from "@material-ui/core";
import { Move } from "../../types/types";
import useStyles from "./styles";

export default function Moves({ moves }: { moves: Move[] }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subtitle} gutterBottom>
        Moves
      </Typography>
      <div className={classes.movesListContainer}>
        <ul className={classes.movesList}>
          {moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </Grid>
  );
}
