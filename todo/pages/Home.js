import * as React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'

const Home = () => {
  return(
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          ToDoList
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Home;