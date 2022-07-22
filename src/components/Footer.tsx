import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{textAlign:"center", opacity:0.4, fontSize:"sm"}}>
      &copy; {new Date().getFullYear()} Made with ❤️ by Mischa Strauss. 
    </Box>
  )
}
export default Footer
