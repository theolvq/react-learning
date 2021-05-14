import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/6.ReactRouter/Practice/Home';
import ProductDetail from './components/6.ReactRouter/Practice/ProductDetail';
import Products from './components/6.ReactRouter/Practice/Products';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail />
        </Route>
      </Switch>
      {/*
                Route between 2 components depending on the path:
                1. Home page ("/")
                2. Products Page ("/products")
                
                ** Home Page **
                • Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself as a developer
                
                ** Products Page **
                • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
            */}
    </div>
  );
}

export default App;
