'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemButton, ListItemText, Typography, Box } from '@mui/material';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkIcon from '@mui/icons-material/Work';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';

const navItems = [
  { name: 'Home', iconOutlined: <HomeOutlinedIcon />, iconFilled: <HomeIcon /> },
  { name: 'About', iconOutlined: <InfoOutlinedIcon />, iconFilled: <InfoIcon /> },
  { name: 'Skills', iconOutlined: <StarOutlineIcon />, iconFilled: <StarIcon /> },
  { name: 'Projects', iconOutlined: <AssignmentOutlinedIcon />, iconFilled: <AssignmentIcon /> },
  { name: 'Certifications', iconOutlined: <RedeemOutlinedIcon />, iconFilled: <RedeemIcon /> },
  { name: 'Achievements', iconOutlined: <StarOutlineIcon />, iconFilled: <StarIcon /> },
  { name: 'Services', iconOutlined: <WorkOutlineIcon />, iconFilled: <WorkIcon /> },
  { name: 'Contact', iconOutlined: <ContactMailOutlinedIcon />, iconFilled: <ContactMailIcon /> },
];

const AppBarWebView = () => {
  const [showText, setShowText] = useState(true);
  const [iconStates, setIconStates] = useState(
    navItems.reduce((acc, item) => {
      acc[item.name] = false; 
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleIconToggle = (name: string) => {
    setIconStates((prev) => {
      const newStates = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === name ? !prev[key] : false; 
        return acc;
      }, {} as Record<string, boolean>);
      
      return newStates;
    });
  };

  return (
    <AppBar position="static"  sx={{  backgroundColor: '#616161',height: '60px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: 'inline-block', mr: 1 }}>
              <ListItemButton onClick={() => handleIconToggle(item.name)} sx={{ display: 'flex', alignItems: 'center' }}>
                {iconStates[item.name] ? item.iconFilled : item.iconOutlined}
                {showText && <ListItemText primary={item.name} sx={{ ml: 1 }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </Box>      
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWebView;
