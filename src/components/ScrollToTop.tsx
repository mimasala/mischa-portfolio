import { Box, Fab, Fade, useScrollTrigger } from '@mui/material'
import React from 'react'
import NavbarService from '../service/NavbarService';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const ScrollToTop = () => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
      });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        NavbarService().handleToTopClick(event)
    }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  )
}

export default ScrollToTop
