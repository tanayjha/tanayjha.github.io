import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Roboto Slab, serif',
    },
    h2: {
      fontFamily: 'Roboto Slab, serif',
    },
    body1: {
      fontFamily: 'Roboto Slab, Arial, sans-serif',
      fontSize: 20
    },
    body2: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  },
});

export default theme;