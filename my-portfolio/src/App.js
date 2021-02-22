import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Websites from './pages/Websites';
import Contact from './pages/Contact';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/Websites' component={Websites} />
        <Route path='/Contact' component={Contact} />
      </Router>
    </div>
  );
}

export default App;
