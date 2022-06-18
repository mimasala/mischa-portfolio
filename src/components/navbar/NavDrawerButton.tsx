import { Button, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react'

interface props {
    children: React.ReactNode;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;}
}

const NavDrawerButton = ({children, icon, ...props}:props) => {
  return (
    <Button {...props} startIcon={icon} sx={{
        
    }}
    variant="contained"
    >
        {children}
    </Button>
  )
}

export default NavDrawerButton