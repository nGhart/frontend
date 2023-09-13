import React from 'react';
import Todo from './Todo';
import Todoform from './Todoform';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote, editNote } from '../appSlice/reminderSlice'; // Adjust the import path

const Invoices = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();

  const addToDo = (todo) => {
    dispatch(addNote(todo)); // Dispatch the action to add a note
  };

  const updatedTodos = (todoId, newValue) => {
    dispatch(editNote({ id: todoId, updatedNote: newValue })); // Dispatch the action to edit a note
  };

  const removeTodo = (id) => {
    dispatch(deleteNote(id)); // Dispatch the action to delete a note
  };

  const completeTodo = (id) => {
    // Dispatch an action to mark a todo as complete
    dispatch(
      editNote({
        id: id,
        updatedNote: {
          ...todos.find((todo) => todo.id === id),
          isComplete: !todos.find((todo) => todo.id === id).isComplete,
        },
      })
    );
  };

  console.log(todos);
  return (
    <div>
      <h5 className="toTitle">To Do List</h5>
      <Todoform onSubmit={addToDo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedTodos={updatedTodos}
      />
    </div>
  );
};

export default Invoices;
