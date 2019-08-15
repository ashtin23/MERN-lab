import React, { Component } from "react";
import axios from 'axios';


class Movie extends Component {
	constructor(){
		super()
		this.state = {
			movies: [],
		 }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/movies')
        .then((res) => {
            console.log(res)
            this.setState({movies: res.data})
        })
        // .catch((err) => {
        //     console.log(err)
        // })
    }
    
    render () {
         return (
            <div className="movie">
              <p>
             {this.state.movies.map(movie => <li key={movie.movie}>{movie.movie}</li>)}
              </p>
              
            </div>
          )
        }
    
       
      
      
}


export default Movie;