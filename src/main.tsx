import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material'
// import './index.css'

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f2f2f2', // Slightly dark background color
          borderRadius: '.2rem',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Remove border
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Remove border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove border on focus
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#f2f2f2', // Slightly dark background color
          borderRadius: '.2rem',
          outline: 'none',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Remove border
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Remove border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove border on focus
            },
          },
        },
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
