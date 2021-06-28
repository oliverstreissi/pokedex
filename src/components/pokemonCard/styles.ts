import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: {}) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      boxShadow: "0px 0px 10px 5px rgb(0, 0, 0, 0.3)",
      transform: "scale(1.05)",
    },
  },
  name: {
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: "'Bangers', cursive",
    fontSize: 28,
  },
  picture: {
    height: "100%",
    width: "100%",
  },
}));
