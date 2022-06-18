import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{textAlign:"center", opacity:0.4, fontSize:"sm"}}>
      &copy; {new Date().getFullYear()} Max Muster. All Rights Reserved.
    </Box>
  )
}
export default Footer
