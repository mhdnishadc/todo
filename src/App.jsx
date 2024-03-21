// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const todoText = prompt("Enter your todo:");
    if (todoText) {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false
      }));
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const totalCount = todos.length;

  return (
    <div className="container mt-5 bg-warning">
      <h1 className="text-center mb-4">Todo App</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddTodo}>Add Todo</button>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <label className="form-check-label" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </label>
              <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3">Total Todos: {totalCount}</p>
    </div>
  );
}

export default App;

