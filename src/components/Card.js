import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
  </Box>
);

function BasicCard() {
  return (
    <Card sx={{ minWidth: 250 }} color="">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome Bryan
        </Typography>
        <Typography variant="h5" component="div">
          You have a 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          $50,000
        </Typography>
        <Typography variant="body2">
          Total USD
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard;