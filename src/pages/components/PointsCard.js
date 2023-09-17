import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function PointsCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Your EcoPoints
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: 85, color: "#468226" }} color="text.secondary" >
          350 Points
        </Typography>
        <Typography sx={{ fontSize: 20,  color: "#468226" }} color="text.secondary" gutterBottom>
          Redeemable for $35.60
        </Typography>
      </CardContent>
    </Card>
  );
}