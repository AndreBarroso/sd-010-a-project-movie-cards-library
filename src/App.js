import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import data from './data';


function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
