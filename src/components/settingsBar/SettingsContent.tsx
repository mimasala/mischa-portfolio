import { Box, Divider, Toolbar, Typography } from '@mui/material'
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
