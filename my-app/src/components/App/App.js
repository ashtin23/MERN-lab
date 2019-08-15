import React, { Component } from 'react';
import {Router,Link,Route} from 'react-router-dom';
import Movie from '../Movie/Movie';
// import './App.css';


// const url = 'http://localhost:3001/api/movies'

class App extends Component  {

  // componentDidMount() {
  //   axios.get("http://localhost:3001/api/movies")
  //   .then(res => {
  //     console.log(res)
  //     this.setState({ movies: res.data })
  //   })
  // }

  render() {
  return (
    
    <div className="App">

      <nav>
        <Link to="/movies">Movies</Link>
      </nav>

      <main>
        <Route path="/" component={Movie} />
      </main>  

    </div>
    
  )
  };
}

export default App;
