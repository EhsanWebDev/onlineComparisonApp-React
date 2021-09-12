
import { Container, createTheme, Paper, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/Topbar/Topbar';
import Checkout from './screens/Checkout/Checkout';
import ContactUs from './screens/ContactUs/ContactUs';
import Home from './screens/Home/Home';
import ProductDetail from './screens/ProductDetail/ProductDetail';



function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
      ].join(','),
    },

    palette: {
      type: darkMode ? 'dark' : "light",
      primary: {
        main: darkMode ? "#16a085" : 'rgb(173, 3, 3)',
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0 }}>
        <Router>
          <Navbar handleDarkMode={() => setDarkMode(!darkMode)} />
          <TopBar />
          <Container fixed>
            <Switch>
              <Route path='/checkout' component={Checkout} />
              <Route path='/contact-us' component={ContactUs} />
              <Route path='/product-details/:id' component={ProductDetail} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </Paper>
    </ThemeProvider>

  );
}

export default App;
