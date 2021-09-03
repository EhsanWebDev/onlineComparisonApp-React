
import { createTheme, ThemeProvider } from '@material-ui/core';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/Topbar/Topbar';
import Home from './screens/Home/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(173, 3, 3)'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <TopBar />
        <div className="app">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>

  );
}

export default App;
