import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, Button, Container } from '@mui/material';
import ToDoList from './ToDoList';


const Home = () => {

  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleChange = () => setAuth(!auth)
  const handleMenu = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)
  

  return (
    <Container>

      <Box sx={{ display: 'flex' }}>
        <AppBar position="static" color="transparent" component="nav">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Hi
            </Typography>
            {
              auth ? (
              <div>
                <IconButton
                  className='accountBtn' onClick={handleMenu}
                  aria-haspopup="true" aria-label="account" aria-controls='accountMenu'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="accountMenu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}
                  keepMounted
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick= {handleChange}>Logout</MenuItem>
                </Menu>
              </div>
              ) : <Button onClick={handleChange}>Login</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="main">
        <ToDoList  />
      </Box>
    </Container>
  )
}

export default Home;