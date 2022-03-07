import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";

export class FormUserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
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
              Unesi opće podatke
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          id="standard-basic"
          label="Unesi ime"
          variant="standard"
          onChange={handleChange("ime")}
          defaultValue={values.ime}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Unesi prezime"
          variant="standard"
          onChange={handleChange("prezime")}
          defaultValue={values.prezime}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Unesi email"
          variant="standard"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Dalje
        </Button>
      </>
    );
  }
}

export default FormUserDetails;
