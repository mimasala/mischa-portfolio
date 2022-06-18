import * as React from "react";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ScrollToTop from "../ScrollToTop";
import CloseIcon from "@mui/icons-material/Close";
import NavbarService from "../../service/NavbarService";
import ThemeUpdater from "../ThemeUpdater";
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
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewOnGithubButton from "../ViewOnGithubButton";
interface props {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const NavUpper = ({ drawerWidth, handleDrawerToggle }: props) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "transparent",
          boxShadow: "none",
          flexGrow: 1,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon color="primary"/>
            </IconButton>
          </Box>
          <ViewOnGithubButton />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollToTop />
    </>
  );
};

export default NavUpper;
