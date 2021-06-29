import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  card: {
    margin: "130px 20%",
    padding: "20px 30px",
    [theme.breakpoints.down("md")]: {
      margin: "120px 5%",
    },
  },
}));
