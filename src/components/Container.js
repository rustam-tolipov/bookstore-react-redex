import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import Input from './bookstore/Input';
import List from './bookstore/List';
import Navbar from './Navbar';

const Container = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/BookStore-React-Redex/">
        <div className="container">
          <List />
          <Input />
        </div>
      </Route>

      <Route path="/BookStore-React-Redex/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </div>
);

export default Container;
