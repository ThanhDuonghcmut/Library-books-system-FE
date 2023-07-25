import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Route, Switch } from 'react-router-dom';
import ManageBooksView from './modules/Admin/Books';

function App() {
  return (
    <Switch>
      <Route path="/admin/books">
        <ManageBooksView />
      </Route>
    </Switch>   
  );
}

export default App;
