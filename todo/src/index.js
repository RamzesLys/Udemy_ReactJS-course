import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const TodoList = () => {
  return (
  <ul>
    <li>Learn React</li>
    <li>Build Awesome App</li>
  </ul>
  )
}

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  )
}

const SearchPanel = () => {
  return (
    <input placeholder='search'/>
  )
}

const App = () => {
 return (
  <div>
  <AppHeader/>
  <SearchPanel/>
  <TodoList/>
  </div>
 )
}

root.render(<App/>);