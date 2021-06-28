import useStyles from "./styles";

export default function LoadingSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="/assets/pokeball.png"
        alt="pokeball"
        className={classes.pokeball}
      />
    </div>
  );
}
