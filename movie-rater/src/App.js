import './App.css';
import MovieList from './components/movie-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Movie Rater</h1>
      <div className='grid grid-cols-2'>
      <MovieList/>
      <h1>Movie Details</h1>
    
      </div>
      </header>
    </div>
  );
}

export default App;
