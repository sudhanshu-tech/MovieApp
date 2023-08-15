
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Headers from './components/header/Headers';
import Home from './pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';


export default function App() {
  return (
    <div>
    <Router>
      <Headers/>
      <Routes>
         <Route index element={<Home/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/movies/:type" element={<MovieList/>} />
        <Route path="/*" element={<h1>page not found</h1>} />
      </Routes>
      </Router>

    </div>
  )
}
