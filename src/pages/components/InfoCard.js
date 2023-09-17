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

export default function InfoCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" align="center"gutterBottom>
          Your Average ESG Score
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: 95, color: "#468226" }} color="text.secondary" align="center">
          76
        </Typography>
        <Typography sx={{ fontSize: 14,  color: "#468226" }} color="text.secondary" align="center" gutterBottom>
          That's a 5% increase from last month!
        </Typography>
      </CardContent>
    </Card>
  );
}