import React, { Component } from 'react';
import './App.css'; 
import MovieList from './components/movie-list';

class App extends Component {
  movies = ['titanic', 'avatar'];

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Authorization': 'Roken 00f663e0ced14126f32ce08a19e580359d589ba3'
      }
    })
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        <h1>Movie Rater</h1>
        <MovieList movies={this.movies} />
      </div>
    );
  }
  
}

export default App;
