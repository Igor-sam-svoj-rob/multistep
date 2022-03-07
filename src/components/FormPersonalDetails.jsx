import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";

export class FormPersonalDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
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
              Unesi osobne podatke
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          id="standard-basic"
          label="Unesi zanimanje"
          variant="standard"
          onChange={handleChange("zanimanje")}
          defaultValue={values.zanimanje}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Unesi grad"
          variant="standard"
          onChange={handleChange("grad")}
          defaultValue={values.grad}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Unesi bio"
          variant="standard"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
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

export default FormPersonalDetails;
