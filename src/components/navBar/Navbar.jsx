import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaSearch, FaSun, FaMoon, FaBell } from 'react-icons/fa';
import logo from '../../assets/companyLogo.png';

const Navbar = ({ toggleSidebar, onSearch }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
<div className={`flex justify-between items-center p-4 shadow-md fixed top-0 left-0 w-full h-16 z-50 ${darkMode ? 'bg-[#2C2C2C]' : 'bg-white'}`}>
<div className="flex items-center">
      <FaBars className="cursor-pointer  text-xl" onClick={toggleSidebar} />
        <img src={logo} alt="Logo" className="h-8 ml-2" />
        <span className={`text-2xl font-bold ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>ToDo</span>
      </div>
      <div className="flex items-center">
        {isSearchOpen ? (
          <form onSubmit={handleSearchSubmit} className="flex items-center" ref={searchInputRef}>
            <input
              type="text"
              className="p-1 border border-gray-300 rounded"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
            />
          </form>
        ) : (
          <FaSearch className="cursor-pointer text-xl" onClick={handleSearchIconClick} />
        )}
        <FaBell className="mx-3 cursor-pointer text-xl" />
        {darkMode ? (
          <FaSun className="cursor-pointer text-xl" onClick={toggleDarkMode} />
        ) : (
          <FaMoon className="cursor-pointer text-xl" onClick={toggleDarkMode} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
