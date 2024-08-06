import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted, markAllInCompleted } from "../redux/slice/todoSlice"; // Updated import path
import { MdFactCheck, MdRadioButtonUnchecked } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter); // Access filter from the todos slice
  const [allCompleted, setAllCompleted] = useState(false); // Local state to track completion status

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  const handleMarkAll = () => {
    if (allCompleted) {
      dispatch(markAllInCompleted());
    } else {
      dispatch(markAllCompleted());
    }
    setAllCompleted(!allCompleted); // Toggle the completion state
  };

  return (
    <div className="flex space-x-4 items-center filter-btn">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Toggle button for marking all complete/incomplete */}
      <Tooltip title={allCompleted ? "Mark All Incomplete" : "Mark All Complete"} arrow placement="top">
        <button
          className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
          onClick={handleMarkAll}
        >
          {allCompleted ? <MdRadioButtonUnchecked /> : <MdFactCheck />}
        </button>
      </Tooltip>
    </div>
  );
};

export default FilterButtons;
