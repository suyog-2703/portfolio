'use client';
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import AppBarMobileView from './components/AppBarMobileView';
import AppBarWebView from './components/AppBarWebView';


const AppBar = () => {

  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.between('xs','md'))
  return (
   <>
   {
    isMobile?
      <AppBarMobileView/>
      :
      <AppBarWebView/>
    }
   </>
   )
   
  
  
}

export default AppBar