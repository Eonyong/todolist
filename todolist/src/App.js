import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';

const App = () => (
  <Routes>
    <Route path='/*' element={ <Home /> }>
      <Route path='todo' element={ <ToDoList /> } />
    </Route>
  </Routes>
)

export default App;
