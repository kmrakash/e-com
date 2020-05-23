import React from 'react';
import Home from './components/pages/homepage/Home.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './components/pages/shop/shop.component';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
