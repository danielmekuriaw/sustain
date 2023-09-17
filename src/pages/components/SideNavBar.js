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
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

export default function SideNavBar() {
  return (

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
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />   
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={"Analytics"} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AnalyticsIcon />   
                    </ListItemIcon>
                    <ListItemText primary={"Analytics"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={"Points"} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PointsIcon />   
                    </ListItemIcon>
                    <ListItemText primary={"Points"} />
                </ListItemButton>
            </ListItem>

            <ListItem key={"Profile"} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ProfileIcon />   
                    </ListItemIcon>
                    <ListItemText primary={"Profile"} />
                </ListItemButton>
            </ListItem>

        </List>
      </Drawer>

  );
}