import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
