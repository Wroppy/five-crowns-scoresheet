import "./App.css";
import Heading from "./components/heading/Heading";
import "./theme/colours.css";
import { ThemeProvider } from "@mui/material/styles";

import Body from "./components/body/Body";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Heading />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
