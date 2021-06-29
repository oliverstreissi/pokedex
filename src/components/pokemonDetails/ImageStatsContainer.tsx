import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { IPokemon } from "../../types/types";
import useStyles from "./styles";

export default function TitleContainer({ pokemon }: { pokemon: IPokemon }) {
  const classes = useStyles();

  return (
    <Grid item container justify="center" alignItems="center">
      <Grid item container xs={12} sm={6}>
        <img
          src={pokemon.picture}
          alt={pokemon.name}
          className={classes.picture}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.subtitle} gutterBottom>
          Basic Stats
        </Typography>
        <Table className={classes.table} size="small">
          <TableBody>
            {pokemon.stats.map((stat, index) => (
              <TableRow key={index}>
                <TableCell className={classes.tableCell}>
                  {stat.stat.name}:
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {stat.base_stat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
