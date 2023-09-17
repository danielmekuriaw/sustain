import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
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
import AppTopBar from "./components/AppTopBar.js";
import InfoCard from "./components/InfoCard.js";
import InfoGrid from "./components/InfoGrid.js";
import HomeCard from "./components/HomeCard.js";
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

export default function Home() {
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >


          <Typography variant="h3">
            Your Eco Stats
          </Typography>
          
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >

            <div>
            <HomeCard/>
            </div>

          </Box>

      </Box>
        
    </Box>
  );
}