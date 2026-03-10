import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import avatar from "../xyz.jpg"; 

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    marginBottom: theme.spacing(2), 
  },
  title: {
    color: "tan",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  navLinks: {
    display: "flex",
    justifyContent: "flex-end", 
    flexGrow: 1, 
  },
  navLink: {
    margin: theme.spacing(1.5),
    color: "tan",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Avatar className={classes.avatar} src={avatar} alt="Dechen Lama" />
        <Box className={classes.navLinks} component="nav">
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.navLink}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/resume" className={classes.navLink}>Resume</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/contact" className={classes.navLink}>Contact</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;





