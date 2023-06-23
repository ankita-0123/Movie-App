import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';

const MovieList = lazy(() => import('./components/movieList/MovieList'));
const Movie = lazy(() => import('./pages/movieDetail/Movie'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Movie />
              </Suspense>
            }
          />
          <Route
            path="/movies/:type"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieList />
              </Suspense>
            }
          />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
