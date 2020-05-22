import React from 'react';
import Home from './components/pages/homepage/Home.component';
import './App.css';
import { Route } from 'react-router-dom';

const Hats = () => (
  <div>
    <h1>Hats Lelo</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/shop/hats" component={Hats} />
    </div>
  );
}

export default App;
