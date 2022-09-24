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
    <div className='container'>
      <div className='todos'>
        <span className='todos__heading'>Active Tasks</span>
        {todos.map((task) => (
          <SingleToDo
            key={task.id}
            todo={task}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className='todos remove'>
        <span className='todos__heading'>Completed Tasks</span>
        {todos.map((task) => (
          <SingleToDo
            key={task.id}
            todo={task}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
