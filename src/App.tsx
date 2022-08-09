import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Horoscopes from "./pages/Horoscopes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#05284a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Horoscopes />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
