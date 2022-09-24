import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css';

interface ToDosProps {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedTodos: ToDo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<ToDosProps> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className='container'>
      <Droppable droppableId='ActiveTodoList'>
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>Active Tasks</span>
            {todos?.map((task, index) => (
              <SingleToDo
                index={index}
                key={task.id}
                todo={task}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='CompletedTodoList'>
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? 'dragcomplete' : ''
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>Completed Tasks</span>
            {completedTodos?.map((task, index) => (
              <SingleToDo
                index={index}
                key={task.id}
                todo={task}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
