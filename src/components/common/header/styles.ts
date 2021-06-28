import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    height: 80,
  },
  link: {
    margin: "5px auto 0 auto",
  },
  logo: {
    height: 70,
    filter: "drop-shadow(0px 0px 3px black)",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
}));
