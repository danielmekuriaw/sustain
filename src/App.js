import './App.css';
import Analytics from "./pages/Analytics.js";
import Points from "./pages/Points.js";
import Home from "./pages/Home.js";
import * as React from 'react';
import { useState } from 'react'; // Import useState
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppTopBar from "./pages/components/AppTopBar.js";

import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/AccountBox';
import PointsIcon from '@mui/icons-material/ShoppingBag';
import AnalyticsIcon from '@mui/icons-material/Leaderboard';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;

function App() {
  const [currentPage, setCurrentPage] = useState("Points"); // Initialize currentPage state

  // Function to change the current page
  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>

            <ListItem key={"Home"} disablePadding>
                <ListItemButton onClick={() => changePage("Home")}>
                    <ListItemIcon>
                        <PointsIcon style={{ color: "#468226" }}/>   
                    </ListItemIcon>
                    <ListItemText style={{ color: "#468226" }} primary={"Home"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={"Analytics"} disablePadding>
                <ListItemButton onClick={() => changePage("Analytics")}>
                    <ListItemIcon>
                        <AnalyticsIcon style={{ color: "#468226" }}/>   
                    </ListItemIcon>
                    <ListItemText style={{ color: "#468226" }} primary={"Analytics"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={"Points"} disablePadding>
                <ListItemButton onClick={() => changePage("Points")}>
                    <ListItemIcon>
                        <PointsIcon style={{ color: "#468226" }}/>   
                    </ListItemIcon>
                    <ListItemText style={{ color: "#468226" }} primary={"Points"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={"Profile"} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ProfileIcon style={{ color: "#468226" }}/>   
                    </ListItemIcon>
                    <ListItemText style={{ color: "#468226" }} primary={"Profile"} />
                </ListItemButton>
            </ListItem>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default'}} >
        <div>
          <AppTopBar/>
        </div>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
          <div>
            {currentPage === "Points" ? <Points /> : <Analytics />}
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
