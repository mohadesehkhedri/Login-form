import React from "react";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import LoginForm from "./components/LoginForm";

const theme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  shape: {
    borderRadius: 8, 
  }
});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <LoginForm />
  </ThemeProvider>
    
  )
}

export default App;