import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    marginTop: 130,
    flexGrow: 1,
    margin: "0 10% 0 10%",
  },
  spinnerWrapper: {
    margin: "50px 0",
    display: "flex",
    justifyContent: "center",
  },
}));
