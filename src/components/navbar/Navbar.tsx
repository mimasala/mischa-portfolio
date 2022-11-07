import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  alpha,
  Container,
  FormControlLabel,
  Switch,
  IconButton,
  Slide,
  Accordion,
  AccordionSummary,
  Collapse,
  Drawer,
  useTheme,
} from "@mui/material";
import React from "react";
import Logo from "../Logo";
import { FaDiscord } from "react-icons/fa";
import NavUpper from "./NavUpper";
import AbcIcon from "@mui/icons-material/Abc";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionGroup } from "react-transition-group";
import NavDrawer from "./SideBar/NavDrawer";
import ResponsiveNavDrawer from "./SideBar/ResponsiveNavDrawer";
import SettingsDrawerContainer from "../settingsBar/SettingsDrawerContainer";
import SettingsContent from "../settingsBar/SettingsContent";

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
