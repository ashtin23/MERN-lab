import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Movie from '../Movie/Movie';
import './App.css';
import axios from 'axios';

// const url = 'http://localhost:3001/api/movies'

class App extends Component  {
  constructor() {
    super();
    this.state = {
      movies: null
    };
    // this.getMovies = this.getMovies.bind(this);
  }


  // delete(){}

  componentDidMount() {
    axios.get("http://localhost:3001/api/movies")
    .then(res => {
      console.log(res)
      this.setState({ movies: res.data })
    })
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
