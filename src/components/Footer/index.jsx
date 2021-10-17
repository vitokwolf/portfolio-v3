import './footer.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="footer">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <GitHubIcon sx={{ padding: '0 15px' }} />
            <LinkedInIcon sx={{ padding: '0 15px' }} />
            <AlternateEmailIcon sx={{ padding: '0 15px' }} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
