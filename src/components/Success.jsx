import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

export class Success extends Component {
  render() {
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
              Uspješno ste napravili račun
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <h1>Čestitamo</h1>
          <p>Uspješno ste došli do kraja ove Multistep forme</p>
        </div>
      </>
    );
  }
}

export default Success;
