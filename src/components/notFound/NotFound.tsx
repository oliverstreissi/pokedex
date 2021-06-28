import React from "react";
import useStyles from "./styles";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router";

export default function NotFound() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        404 page not found
      </Typography>
      <Button
        onClick={() => history.push("/")}
        variant="contained"
        color="primary"
      >
        View some pokemons
      </Button>
    </div>
  );
}
