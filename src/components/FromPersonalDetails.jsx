import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Navbar } from './';
import { ContinueButton, BackButton } from './UIButtons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
});

const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const classes = useStyles();

  return (
    <>
      <Navbar title={'Enter Personal Details'} />
      <Container maxWidth="sm">
        <TextField
          label="Occupation"
          placeholder="Enter Your Occupation"
          type="text"
          fullWidth={true}
          margin="normal"
          defaultValue={values.occupation}
          onChange={handleChange('occupation')}
        />
        <br />
        <TextField
          label="City"
          placeholder="Enter Your City"
          type="text"
          fullWidth={true}
          margin="normal"
          defaultValue={values.city}
          onChange={handleChange('city')}
        />
        <br />
        <TextField
          label="Bio"
          placeholder="Enter Your Bio"
          type="text"
          fullWidth={true}
          margin="normal"
          multiline={true}
          rows={3}
          defaultValue={values.bio}
          onChange={handleChange('bio')}
        />
        <br />
        <div className={classes.center}>
          <ContinueButton nextStep={nextStep} />
          <BackButton prevStep={prevStep} />
        </div>
      </Container>
    </>
  );
};

export default FormPersonalDetails;
