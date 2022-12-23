import {
  Box,
} from "@mui/material";
import React from "react";
import SettingsDrawerContainer from "../settingsBar/SettingsDrawerContainer";
import NavUpper from "./NavUpper";
import ResponsiveNavDrawer from "./SideBar/ResponsiveNavDrawer";

const drawerWidth = 240;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Box>
      <NavUpper
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        handleSettingsToggle={handleSettingsToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <ResponsiveNavDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <SettingsDrawerContainer
          isOpen={settingsOpen}
          handleToggleSettings={handleSettingsToggle}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
