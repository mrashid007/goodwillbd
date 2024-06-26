import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import Menubar from "./componets/LeftMenu/Menubar";
import Menulink from "./componets/LeftMenu/Menulink";

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
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Menulink />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
