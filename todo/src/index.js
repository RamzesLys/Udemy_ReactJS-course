import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const root = createRoot(document.getElementById('root'));

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