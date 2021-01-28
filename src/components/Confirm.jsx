import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Navbar } from './';
import { ContinueButton, BackButton } from './UIButtons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
  primaryText: {
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  secondaryText: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 1)',
  },
});

const Confirm = ({ nextStep, prevStep, values }) => {
  const classes = useStyles();

  return (
    <>
      <Navbar title={'Confirm User Data'} />
      <Container maxWidth="sm">
        <List>
          <ListItem className={classes.center}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
              primary="First Name"
              secondary={values.firstName}
            />
          </ListItem>
          <ListItem className={classes.center}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
              primary="Last Name"
              secondary={values.lastName}
            />
          </ListItem>
          <ListItem className={classes.center}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
              primary="Email"
              secondary={values.email}
            />
          </ListItem>
          <ListItem className={classes.center}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
              primary="Occupation"
              secondary={values.occupation}
            />
          </ListItem>
          <ListItem className={classes.center}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
              primary="City"
              secondary={values.city}
            />
          </ListItem>
          <ListItem className={classes.center}>
            <ListItemText
              classes={{
                primary: classes.primaryText,
                secondary: classes.secondaryText,
              }}
              primary="Bio"
              secondary={values.bio}
            />
          </ListItem>
        </List>
        <br />
        <div className={classes.center}>
          <ContinueButton nextStep={nextStep} />
          <BackButton prevStep={prevStep} />
        </div>
      </Container>
    </>
  );
};

export default Confirm;
