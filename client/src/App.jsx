import './App.css'
import Movie from './components/Movie';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import MovieBrowser from './pages/MovieBrowser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/titles/:page' element={<MovieBrowser />} />
        <Route path='/title/:id' element={<Movie />} />
      </Routes>
    </Router>

  )
}

export default App;
