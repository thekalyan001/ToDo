import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/slice/todoSlice"; // Updated import path
import Tooltip from "@mui/material/Tooltip";

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos); // Access todos from the todos slice
  const filter = useSelector((state) => state.todos.filter); // Access filter from the todos slice
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showError, setShowError] = useState(false);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  // Click event for Enter key to add todo
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodoClick();
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 rounded  todo_darkMode" style={{ backgroundColor: '#26644f', borderRadius: '10px' }}>
      <h2 className="mt-3 ml-2 mb-6 text-2xl font-bold text-center uppercase">
        My Todo 🕑
      </h2>
      <div className="flex items-center mb-4 searchtodo_dark">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          style={{ borderRadius: '10px' }}
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => {
            setNewTodoText(e.target.value);
            if (showError) {
              setShowError(false);
            }
          }}
          onKeyDown={handleKeyDown}
        />
        <Tooltip title="add to list" arrow placement="top">
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            <BsPlus size={20} />
          </button>
        </Tooltip>
      </div>
      {showError && (
        <p className="text-red-500 text-sm mt-2">Enter any todo to proceed further</p>
      )}
      <div className="flex flex-row sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4  searchtodo_dark">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            style={{ borderRadius: '10px' }}
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Tooltip title="Search in todo" arrow placement="top">
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              <BsSearch size={20} />
            </button>
          </Tooltip>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
