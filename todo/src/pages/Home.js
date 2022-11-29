import * as React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'


const Home = () => {
  const [auth, setAuth] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleChange = (e) => {
    setAuth(e.target.checked);
  }

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }


  return(
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          className="menu" color="inherit" aria-label="Menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="title" className="appBarText" 
          sx={{ flexGrow: 1 }}
        >
          News
        </Typography>
        {auth ? (
          <div>
            <IconButton
              className="accountBtn" aria-label="Delete"
              onClick={handleMenu} aria-controls="accountMenu"
              aria-haspopup="true"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="accountMenu" anchorEl={anchorEl} keepMounted
              open={Boolean(anchorEl)} onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleChange}>Logout</MenuItem>
            </Menu>
          </div>
        ) : 
          <Button color="inherit" onClick={handleChange}>Login</Button>
        }
        
      </Toolbar>
    </AppBar>
  );
  
};

export default Home;