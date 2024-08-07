import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  editTodo,
} from "../redux/slice/todoSlice"; // Updated import path
import { FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineSave } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo({ id: index, text: newText })); // Pass an object here
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex flex-row sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        {isEditing ? (
          <input
            className="mr-4 border px-2 py-1 rounded"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span className={`mr-4 ${todo.completed ? "line-through text-gray-500" : ""}`}>
            {todo.text}
          </span>
        )}
        {isEditing && (
          <Tooltip title="Save Todo" arrow placement="top">
            <button
              className="text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
              onClick={handleEdit}
            >
              <MdOutlineSave />
            </button>
          </Tooltip>
        )}
      </div>

      <div className="space-x-3 ml-8"
      style={{display: 'flex', marginLeft: '1px', padding: '3px'}}
      >
        {!todo.completed && (
          <Tooltip title="Mark as Completed" arrow>
            <button
              className="text-sm bg-purple-400 text-white sm:px-2 px-1 py-1 rounded"
              onClick={() => dispatch(markCompleted(index))}
            >
              <FaCheck />
            </button>
          </Tooltip>
        )}
        {todo.completed && (
          <Tooltip title="Mark as Incomplete" arrow placement="top">
            <button
              className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
              onClick={() => dispatch(markIncomplete(index))}
            >
              <FaTimes />
            </button>
          </Tooltip>
        )}

        {!isEditing && (
          <Tooltip title="Edit Todo" arrow>
            <button
              className="p-2 mr-2 text-sm bg-emerald-500 text-white sm:px-2 py-1 rounded"
              onClick={handleEdit}
            >
              <FiEdit />
            </button>
          </Tooltip>
        )}

        <Tooltip title="Delete Todo" arrow>
          <button
            className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(removeTodo(index))}
          >
            <FaTrash />
          </button>
        </Tooltip>
      </div>
    </li>
  );
};

export default TodoItem;
