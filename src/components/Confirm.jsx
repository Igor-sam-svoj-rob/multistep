import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import List from "@mui/material/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export class Confirm extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { ime, prezime, email, zanimanje, grad, bio },
    } = this.props;
    return (
      <>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Unesi osobne podatke
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="Ime" secondary={ime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Prezime" secondary={prezime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="E-mail" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zanimanje" secondary={zanimanje} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Grad" secondary={grad} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
        <br />
        <Button variant="contained" onClick={this.back}>
          Nazad
        </Button>
        <Button variant="contained" onClick={this.continue}>
          Dalje
        </Button>
      </>
    );
  }
}

export default Confirm;
