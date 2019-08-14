import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Movie from '../Movie/Movie';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.getMovies = this.getMovies.bind(this);
  }

  delete(){}

  componentDidMount() {
    this.getMovies();
  }
  getMovies() {
    fetch("http://localhost:3000/")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({movies: res});
    });
  }

  render() {
  return (
    <Router>
    <div className="App">
      <nav className="App-header">
        <Link to="/movies">Movies</Link>
      </nav>
      <Switch>
        <Route
          path="/"
          render={props => <Movie {...props}{...this.state} />}
          />
        <Route
          path="/movie"
          render={props => <Movie {...props}{...this.state} />}
          />
      </Switch>
    </div>
    </Router>
  )
  };
}

export default App;
