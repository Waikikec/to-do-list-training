import React from 'react';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css';

interface ToDosProps {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<ToDosProps> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleToDo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default ToDoList;
