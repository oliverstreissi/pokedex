import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  card: {
    margin: "130px 20%",
    padding: "20px 30px",
    [theme.breakpoints.down("md")]: {
      margin: "120px 5%",
    },
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: "'Bangers', cursive",
    textShadow: "0px 0px 5px black",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "'Bangers', cursive",
    fontSize: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    textTransform: "capitalize",
  },
  picture: {
    display: "block",
    height: 250,
    margin: "0 auto",
  },
  evolutionPicture: {
    height: 100,
  },
  tableCell: {
    textTransform: "capitalize",
    borderBottom: "none",
    fontSize: 16,
  },
  table: {
    maxWidth: 250,
    margin: "0 auto",
  },
  containerMarginTop: {
    marginTop: 30,
  },
  movesListContainer: {
    overflowY: "scroll",
    height: 300,
    maxWidth: 400,
    margin: "0 auto",
  },
  movesList: {
    columnCount: 2,
    columnWidth: "50%",
    "& > *": {
      textTransform: "capitalize",
    },
  },
}));
