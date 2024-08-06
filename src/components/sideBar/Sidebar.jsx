import { FaTasks, FaCalendarAlt, FaStarOfLife, FaListAlt, FaUserFriends, FaPlusCircle } from 'react-icons/fa';
import './Sidebar.css';
import profile from '../../assets/girl.png';

const Sidebar = ({ isOpen, onMenuClick }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="profile">
        <img src={profile} alt="Profile" />
        <div className="profile-info">
          <h2>Hey, ABCD</h2>
        </div>
      </div>
      <div className="menu box">
        <ul>
          <li onClick={() => onMenuClick('allTasks')}><FaTasks /> All Tasks</li>
          <li><FaCalendarAlt /> Today</li>
          <li><FaStarOfLife /> Important</li>
          <li><FaListAlt /> Planned</li>
          <li><FaUserFriends /> Assigned to me</li>
        </ul>
      </div>
      <div className="add-list box">
        <FaPlusCircle /> Add list
      </div>
    </div>
  );
};

export default Sidebar;
