import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export default function Success() {
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Success" />
        <h1>Thank You For Your Submission</h1>
      </>
    </MuiThemeProvider>
  );
}
