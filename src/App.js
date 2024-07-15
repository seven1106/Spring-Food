import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme';
import { Navbar } from './components/navBar/Navbar';
import { Home } from './components/home/Home';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
      
    </ThemeProvider>
  );
}

export default App;
