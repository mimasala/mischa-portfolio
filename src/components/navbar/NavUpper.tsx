import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ScrollToTop from "../ScrollToTop";
import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ViewOnGithubButton from "../ViewOnGithubButton";
import SettingsButton from "../settingsBar/SettingsButton";
interface props {
  drawerWidth: number;
  handleDrawerToggle: () => void;
  handleSettingsToggle: () => void;
}

const NavUpper = ({
  drawerWidth,
  handleDrawerToggle,
  handleSettingsToggle,
}: props) => {
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
              <MenuIcon color="primary" />
            </IconButton>
          </Box>
          <Stack direction={"row"} spacing={1}>
            <ViewOnGithubButton />
            <Divider orientation="vertical" flexItem />
            <SettingsButton handleClick={handleSettingsToggle} />
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollToTop />
    </>
  );
};

export default NavUpper;
