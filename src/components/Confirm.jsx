import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import { Component } from "react";

export default function Confirm({ nextStep, previousStep, values }) {
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
        <AppBar title="Confirm User Data"></AppBar>
        <List>
          <ListItem primaryText="First Name" secondaryText={values.firstName} />
          <ListItem primaryText="Last Name" secondaryText={values.lastName} />
          <ListItem primaryText="Email" secondaryText={values.email} />
          <ListItem
            primaryText="Occupation"
            secondaryText={values.occupation}
          />
          <ListItem primaryText="City" secondaryText={values.city} />
          <ListItem primaryText="Bio" secondaryText={values.bio} />
        </List>
        <br />
        <RaisedButton
          label="Previous"
          primary={false}
          style={styles.button}
          onClick={back}
        />
        <RaisedButton
          label="Confirm & Continue"
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
