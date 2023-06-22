import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = [, '']; 
  return (
  <ul>
    <li><TodoListItem label="Drink Coffee"/></li>
    <li><TodoListItem label="Build React App" important/></li>
  </ul>
  )
}

export default TodoList;