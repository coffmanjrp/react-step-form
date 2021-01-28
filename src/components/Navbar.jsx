import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  heading: {
    margin: '0 auto',
  },
});

const Navbar = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="sm">
        <Toolbar disableGutters={true}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.heading}>
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
