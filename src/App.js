import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';

const NotFound = () => {
  return <h2>404 page not found.</h2>
}

function App() {
    return(
      
      <Router>
        
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to="/" className='navbar-brand'>...Ishoboy Movie Finder...📹</Link>
        </nav>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movie/:id" component={Movie}/>
          <Route component={NotFound}/>
        </Switch>

      </Router>
    
    )  
}

export default App;
