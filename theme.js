import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 14,
    h1: { fontWeight: 600, fontSize: '2rem', lineHeight: 1.2 },
    h2: { fontWeight: 500, fontSize: '1.8rem', lineHeight: 1.3 },
    body1: { fontWeight: 400, fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontWeight: 400, fontSize: '0.875rem', lineHeight: 1.5 },
  },
  palette: {
    primary: {
      light: '#4f83cc', // Light blue
      main: '#1976d2',  // Strong, professional blue
      dark: '#115293',  // Darker blue for emphasis
      contrastText: '#ffffff', // White text for contrast on dark backgrounds
    },
    secondary: {
      light: '#b0bec5', // Light grey-blue
      main: '#607d8b',  // Muted blue-grey for a sophisticated look
      dark: '#455a64',  // Darker grey-blue
      contrastText: '#ffffff', // White text for contrast on secondary elements
    },
    background: {
      default: '#e3f2fd', // Soft light blue background for the app
      paper: " #EAEAEA",   // White background for card-like surfaces
    },
    text: {
      primary: '#212121', // Dark grey for text to keep it readable
      secondary: '#757575', // Light grey for secondary text
    },
    openTitle: '#1976d2', // Blue for important titles or buttons
    protectedTitle: '#607d8b', // Muted blue-grey for secondary titles
    type: 'light', // Light theme overall
  },
 
});

export default theme;



