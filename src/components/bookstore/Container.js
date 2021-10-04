import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoriesPage from '../pages/CategoriesPage';
import Input from './Input';
import List from './List';
import Navbar from './Navbar';

const Container = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <div className="container">
          <List />
          <Input />
        </div>
      </Route>
      <Route exact path="/BOOKS">
        <div className="container">
          <List />
          <Input />
        </div>
      </Route>
      <Route path="/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </div>
);

export default Container;
