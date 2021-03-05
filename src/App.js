import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom/';

import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
