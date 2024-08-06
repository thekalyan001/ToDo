import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Navbar from './components/navBar/Navbar';
import Sidebar from './components/sideBar/Sidebar';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${selectedTask ? 'details-open' : ''}`}>
        
        <Todo className="todo-item"/>
      </div>
    </>
  );
}

export default App;
