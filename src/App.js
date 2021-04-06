import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom/';

import FormFondos from './Components/FormFondos';
import Home from './Components/Home';
import Login from './Components/Login';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/tasks" component={Home} />
      <Route exact path="/" component={Login} />
      <Route path="/fondos" component={FormFondos} />
    </Router>
  );
}

export default App;
