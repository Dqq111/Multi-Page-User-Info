import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Component } from "react";

export default function FormUserDetails({ nextStep, handleChange, values }) {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Enter User Details"></AppBar>
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueStep}
        />
      </>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};
