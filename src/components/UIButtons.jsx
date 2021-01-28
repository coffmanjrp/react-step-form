import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    margin: 15,
  },
});

export const ContinueButton = ({ nextStep }) => {
  const classes = useStyles();

  const succession = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={succession}
    >
      Continue
    </Button>
  );
};

export const BackButton = ({ prevStep }) => {
  const classes = useStyles();

  const back = (e) => {
    e.preventDefault();

    prevStep();
  };

  return (
    <Button className={classes.button} variant="contained" onClick={back}>
      Back
    </Button>
  );
};
