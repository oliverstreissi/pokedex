import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
  card: {
    margin: "50px 20%",
    padding: "20px 30px",
    [theme.breakpoints.down("md")]: {
      margin: "30px 5%",
    },
  },
}));
