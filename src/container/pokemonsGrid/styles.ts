import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    marginTop: 50,
    flexGrow: 1,
    marginRight: "10%",
    marginLeft: "10%",
  },
  spinnerWrapper: {
    margin: "50px 0",
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      marginTop: 30,
      marginRight: "5%",
      marginLeft: "5%",
    },
  },
}));
