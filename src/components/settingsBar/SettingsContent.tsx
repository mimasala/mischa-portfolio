import { AppBar, Box, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Collapsible from '../navbar/SideBar/Collapsible';
import ThemeUpdater from '../ThemeUpdater';

const SettingsContent = () => {
  return (
    <Box sx={{width:{xs:240, sm:350}}}>
      <Toolbar>
        <Typography variant="h6">Settings</Typography>
      </Toolbar>
      <Divider/>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1em",
        }}
      >
        <ThemeUpdater />
      </Box>
    </Box>
  )
}

export default SettingsContent
