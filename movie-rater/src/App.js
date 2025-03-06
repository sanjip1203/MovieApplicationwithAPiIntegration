import { use, useState } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {
  const [selectMovie,setSelectMovie] = useState(null);
  const movieClicked = movie =>{
    console.log(movie)
    setSelectMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1> Movie Rater</h1>
      <div className='grid grid-cols-2'>
      <MovieList movieClicked={movieClicked}/>
      <MovieDetails movie={selectMovie}/>
    
      </div>
      </header>
    </div>
  );
}

export default App;
