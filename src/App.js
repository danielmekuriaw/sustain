import './App.css';
import Analytics from "./pages/Analytics.js";
import Points from "./pages/Points.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppTopBar from "./pages/components/AppTopBar.js";
import SideNavBar from './pages/components/SideNavBar.js';


function App() {
  return (

    <Box sx={{ display: 'flex' }}>
    <CssBaseline />

    <SideNavBar/>
    
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default'}} >

        <div>
      <AppTopBar/>
        </div>


      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >

        <div>
      <Points/>
        </div>


      </Box>
    </Box>
  </Box>

  );
}

export default App;
