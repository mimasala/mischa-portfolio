import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

interface props{
    handleClick: () => void
}

const SettingsButton = ({handleClick}:props) => {
  
    return (
    <div>
        <IconButton onClick={handleClick}>
            <SettingsIcon color='primary'/>
        </IconButton>
    </div>
  )
}

export default SettingsButton