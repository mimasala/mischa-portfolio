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
import NavDrawer from "./NavDrawer";
import ResponsiveNavDrawer from "./ResponsiveNavDrawer";

const drawerWidth = 240;

const Navbar = () => {
  const [checked, setChecked] = React.useState(true)

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <NavUpper
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <ResponsiveNavDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      </Box>
    </Box>
  );
};
// <NavUpper setChecked={() => setChecked(!checked)} />
export default Navbar;
