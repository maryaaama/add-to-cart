import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';
export default function Social() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <Grid display="flex" justifyContent="center" lignItems="center" container spacing={2} minHeight={160} style={{backgroundcolor:'blue'}}>
     
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
    <BottomNavigationAction
      label="whatsApp"
      value="whatsApp"
      icon={<WhatsAppIcon />}
    />
    <BottomNavigationAction
      label="Twitter"
      value="Twitter"
      icon={<TwitterIcon />}
    />
    <BottomNavigationAction
      label="Instagram"
      value="Instagram"
      icon={<InstagramIcon />}
    />
    <BottomNavigationAction label="Linkedin" value="Linkedin" icon={<LinkedInIcon />} />
  </BottomNavigation>
  </Grid>
  );
}