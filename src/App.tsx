import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menubar from "./components/LeftMenu/Menubar";
import Menulink from "./components/LeftMenu/Menulink";

const drawerWidth = 240;

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="secondary"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Goodwill Mariage Media
            </Typography>
          </Toolbar>
        </AppBar>
        <Menubar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
        >
          <Toolbar />
          <Menulink />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
