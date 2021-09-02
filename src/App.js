
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
