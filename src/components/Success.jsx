import Container from '@material-ui/core/Container';
import { Navbar } from './';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
});

const Success = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar title={'Success'} />
      <Container maxWidth="sm" className={classes.center}>
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
      </Container>
    </>
  );
};

export default Success;
