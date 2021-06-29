import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Link to="/" className={classes.link}>
          <img
            data-testid="header-logo"
            src={process.env.PUBLIC_URL + "/assets/pokedex_logo.png"}
            alt="pokedex"
            className={classes.logo}
          />
        </Link>
      </AppBar>
    </div>
  );
}
