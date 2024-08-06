import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos.todos; // Access todos from the todos slice
    const filter = state.todos.filter; // Access filter from the todos slice
    const searchTerm = (state.todos.searchTerm || "").toLowerCase(); // Safe access to searchTerm

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      // Add a safe access check for todo.text
      const matchesSearch = todo.text && todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <ul>
      <li className="my-2 text-md">Here are your todo tasks 👩🏻‍💻</li>
      <hr />
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
