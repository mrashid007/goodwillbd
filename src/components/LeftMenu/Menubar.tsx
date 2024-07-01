import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import siteLogo from "./../../assets/bangladeshi_logo.svg"; // Adjust the path to your logo
import "./../../App.css"; // Import the CSS file with the active class

const drawerWidth = 240;

const Menubar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleItemClick = (text: string) => {
    setActiveLink(text);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <img
          src={siteLogo}
          alt="logo"
          style={{ width: 40, height: 40, marginRight: 8 }}
        />
        <Typography variant="h4" noWrap component="div">
          Goodwill
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Registration", path: "/registration" },
          { text: "My Profile", path: "/profile" },
          { text: "Edit Profile", path: "/edit-profile" },
          { text: "My Choice", path: "/my-choice" },
          { text: "Search", path: "/search" },
          { text: "Appointment", path: "/appointment" },
        ].map(({ text, path }, index) => (
          <ListItemButton
            key={text}
            component={NavLink}
            to={path}
            className={`nav-link ${activeLink === text ? "active-link" : ""}`}
            onClick={() => handleItemClick(text)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Contact", path: "/contact" },
          { text: "Favorites", path: "/favorites" },
          { text: "Top Profiles", path: "/top-profiles" },
        ].map(({ text, path }, index) => (
          <ListItemButton
            component={NavLink}
            to={path}
            className={`nav-link ${activeLink === text ? "active-link" : ""}`}
            onClick={() => handleItemClick(text)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Change Password", path: "/change-password" },
          { text: "Logout", path: "/logout" },
          { text: "Sign-In", path: "/sign-in" },
        ].map(({ text, path }, index) => (
          <ListItemButton
            component={NavLink}
            to={path}
            className={`nav-link ${activeLink === text ? "active-link" : ""}`}
            onClick={() => handleItemClick(text)}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Menubar;
