import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { ContinueButton } from './UIButtons';
import { Navbar } from './';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
});

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const classes = useStyles();

  return (
    <>
      <Navbar title={'Enter Your Details'} />
      <Container maxWidth="sm">
        <TextField
          label="First Name"
          placeholder="Enter Your First Name"
          type="text"
          fullWidth={true}
          margin="normal"
          defaultValue={values.firstName}
          onChange={handleChange('firstName')}
        />
        <br />
        <TextField
          label="Last Name"
          placeholder="Enter Your Last Name"
          type="text"
          fullWidth={true}
          margin="normal"
          defaultValue={values.lastName}
          onChange={handleChange('lastName')}
        />
        <br />
        <TextField
          label="Email"
          placeholder="Enter Your Email"
          type="email"
          fullWidth={true}
          margin="normal"
          defaultValue={values.email}
          onChange={handleChange('email')}
        />
        <br />
        <div className={classes.center}>
          <ContinueButton nextStep={nextStep} />
        </div>
      </Container>
    </>
  );
};

export default FormUserDetails;
