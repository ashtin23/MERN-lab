import React, { Component } from "react";
import axios from 'axios';
import {
    // BrowserRouter as Router,
    Link,
    Route,
  } from 'react-router-dom'
// import { Link } from "react-router-dom";

class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		}
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/movies')
        .then((res) => {
            console.log(res)
            this.setState({
                movies: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render () {
        const movies = this.state.movies.map((movie, index) => {
          return (
            <div key={ index }>
              <p>
                <Link to={`/movies/${movie._id}`}>{ movie.movie }</Link>
              </p>
              <Route
                path={`/movies/${movie._id}`}
              />
            </div>
          )
        })
    
        return (
          <div>
            <h1>Movies</h1>
            { movies }
          </div>
        )
      
    }
}


export default Movie;