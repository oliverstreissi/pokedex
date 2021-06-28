import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { fetchPokemon, fetchEvolutionChain } from "../../api/api";
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner";
import { IEvolutionItem, IPokemon, ParamTypes } from "../../types/types";

export default function PokemonDetails() {
  const classes = useStyles();
  const { pokemonId } = useParams<ParamTypes>();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [evolutionChain, setEvolutionChain] = useState<IEvolutionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      fetchPokemon(url).then((data) => {
        setPokemon(data);

        fetchEvolutionChain(data.species).then((data) => {
          setEvolutionChain(data);
          console.log(data);

          setIsLoading(false);
        });
      });
    };

    fetchData();
  }, [pokemonId]);

  return (
    <Card className={classes.card}>
      <CardActions>
        <Button
          onClick={() => history.push("/")}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          size="medium"
          color="secondary"
        >
          Back
        </Button>
      </CardActions>
      <CardContent>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          pokemon &&
          evolutionChain && (
            <Grid container spacing={5}>
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
                  <Table size="small" className={classes.table}>
                    <TableBody>
                      {pokemon.stats.map((stat, index) => (
                        <TableRow key={index}>
                          <TableCell className={classes.tableCell}>
                            {stat.stat.name}:
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align="right"
                          >
                            {stat.base_stat}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
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
                  <Typography className={classes.subtitle}>
                    Abilities
                  </Typography>
                  <Typography className={classes.text}>
                    {pokemon.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                alignItems="flex-start"
                justify="center"
                className={classes.containerMarginTop}
              >
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
                          onClick={() =>
                            history.push(`/pokemon/${data.pokemon.id}`)
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <TableCell
                            className={classes.tableCell}
                            align="center"
                          >
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
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.subtitle} gutterBottom>
                    Moves
                  </Typography>
                  <div className={classes.movesListContainer}>
                    <ul className={classes.movesList}>
                      {pokemon.moves.map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                      ))}
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          )
        )}
      </CardContent>
    </Card>
  );
}
