import {ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/TopBar"

function App() {
  const [theme, colormode] = useMode();


  return (
    <ColorModeContext.Provider value={colormode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
