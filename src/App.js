import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';


function App() {
  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
           Gee
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        {/* The  one that displays in use of routing */}
        <Route path="/product/:id" component={Productscreen}></Route>
        <Route path="/" component={Homescreen} exact></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  </BrowserRouter>
  );
  
}

export default App;