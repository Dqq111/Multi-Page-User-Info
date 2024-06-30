import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Component } from "react";

export default function FormPersonalDetails({
  nextStep,
  previousStep,
  handleChange,
  values,
}) {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  function back(e) {
    e.preventDefault();
    previousStep();
  }

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Enter Personal Details"></AppBar>
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />

        <RaisedButton
          label="Previous"
          primary={false}
          style={styles.button}
          onClick={back}
        />
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
