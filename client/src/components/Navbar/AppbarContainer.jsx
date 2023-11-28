import React from 'react'
import {Link} from 'react-router-dom';
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    background: "#ffffff",
  }));

const AppbarContainer = ({open, handleDrawerOpen, handleLogout}) => {
  return (
    <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "#000000",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ marginLeft: "auto", display: "flex", gap: 15 }}>
          <Link to="/chatbox" className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      Ask GPT 3.5
    </Link>
            <Button variant="outlined" onClick={handleLogout}>
              Logout
            </Button>          
          </div>
          
        </Toolbar>
      </AppBar>
  )
}

export default AppbarContainer