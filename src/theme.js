import { createMuiTheme, lighten } from "@material-ui/core/styles";
import { teal, purple, deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: deepOrange,
    secondary: purple
  }
});

export default theme;
