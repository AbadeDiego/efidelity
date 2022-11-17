import React from "react";
import Router from './Routes/index'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6F7FC3',
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </>
  )
}
