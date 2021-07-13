import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { IEvolutionItem } from "../../types/types";
import useStyles from "./styles";

export default function Evolutions({
  evolutionChain,
}: {
  evolutionChain: IEvolutionItem[];
}) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subtitle} gutterBottom>
        Evolution Chain
      </Typography>
      <Table size="small" className={classes.table}>
        <TableBody>
          {evolutionChain.map((data: IEvolutionItem, index) => (
            <TableRow
              key={index}
              hover
              onClick={() => history.push(`/pokemon/${data.pokemon.id}`)}
              style={{ cursor: "pointer" }}
            >
              <TableCell className={classes.tableCell} align="center">
                <img
                  src={data.pokemon.picture}
                  alt={data.pokemon.name}
                  className={classes.evolutionPicture}
                />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {data.minLevel
                  ? data.pokemon.name + ` (Level: ${data.minLevel})`
                  : data.pokemon.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
}
