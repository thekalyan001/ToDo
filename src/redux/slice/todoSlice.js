// store/slice/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: 'ALL',
    searchTerm: '',
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { text: action.payload, completed: false };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    toggleTodo: (state, action) => {
      const index = action.payload;
      state.todos[index].completed = !state.todos[index].completed;
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    removeTodo: (state, action) => {
      const index = action.payload;
      state.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos[id].text = text;
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    markCompleted: (state, action) => {
      const index = action.payload;
      state.todos[index].completed = true;
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    markIncomplete: (state, action) => {
      const index = action.payload;
      state.todos[index].completed = false;
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    filterTodos: (state, action) => {
      state.filter = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    markAllCompleted: (state) => {
      state.todos.forEach(todo => todo.completed = true);
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
    markAllInCompleted: (state) => {
      state.todos.forEach(todo => todo.completed = false);
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Save to localStorage
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  markCompleted,
  markIncomplete,
  filterTodos,
  updateSearchTerm,
  markAllCompleted,
  markAllInCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
