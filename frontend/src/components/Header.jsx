import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
        <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
            DocLibrary
        </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
