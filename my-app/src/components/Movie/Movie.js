import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Movie extends Component {
	constructor(props) {
		super(props)
		this.server = 'http://localhost:3000/api/movies';

		this.state = {
			movies: []
		}
    }
    componentDidMount() {
        this.getMovie();
    }
        setQuery(evt) {
            this.query = evt.target.value;
        }
    getMovie() {
        fetch(this.server+'/movie'+this.query)
        .then(res => res.json())
        .then(res => this.setState({movies: res.results}))
        .then(res => console.log(this.state))
    }    

    render() {
		return (
            <div>
                <h1>{this.props.movies}</h1>
                <button onClick={this.getMovie}>Movies</button>
            </div> 
        );
    }
}


export default Movie;