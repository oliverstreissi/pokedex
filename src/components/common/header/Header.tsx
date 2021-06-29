import React from "react";
import useStyles from "./styles";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Link to="/" className={classes.link}>
          <img
            src={process.env.PUBLIC_URL + "/assets/pokedex_logo.png"}
            alt="pokedex"
            className={classes.logo}
          />
        </Link>
      </AppBar>
    </div>
  );
}