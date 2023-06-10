import { ThemeProvider } from "@emotion/react";

import { Navbar } from "./components";
import theme from "./theme";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
