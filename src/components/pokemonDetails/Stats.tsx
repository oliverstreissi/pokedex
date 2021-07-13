import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Stat } from "../../types/types";
import useStyles from "./styles";

export default function Stats({ stats }: { stats: Stat[] }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subtitle} gutterBottom>
        Basic Stats
      </Typography>
      <Table className={classes.table} size="small">
        <TableBody>
          {stats.map((stat, index) => (
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
  );
}
