import { useState } from "react";
import { ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Leaderboard from "./components/scenes/leaderboard";
// import Players from "./components/scenes/players";
// import Schedule from "./components/scenes/schedule";
// import Rules from "./components/scenes/rules";
// import ContactUs from "./components/scenes/contactus";
// import TeamManager from "./components/scenes/teammanager";
// import PlayerManager from "./components/scenes/playermanager";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                </Routes>

            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

export default App;