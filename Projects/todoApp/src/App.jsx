import React, { useState } from 'react';
import AppName from './components/AppName';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddClick = () => {
    if (newTodo.trim() && dueDate) {
      setTodos([...todos, { text: newTodo, date: dueDate }]);
      setNewTodo(''); 
      setDueDate('');
    }
  };

  const handleDeleteClick = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container text-center">
      <AppName />
      <div className="container">
        <div className="items-container">
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="text"
                placeholder="Enter todo here"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAddClick}
              >
                Add
              </button>
            </div>
          </div>

          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div className="row mb-2" key={index}>
                <div className="col-6">{todo.text}</div>
                <div className="col-4">{todo.date}</div>
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No todos available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
