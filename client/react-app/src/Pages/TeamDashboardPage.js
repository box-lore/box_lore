import './TeamDashPage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../Components/Sidebar/Sidebar.js';
import TeamDash from '../Components/TeamDash/TeamDash.js'
import Navbar from "../Components/Navbar/NavBar.js";

function TeamDashboardPage() {
    return (
    <div className="TeamDashPage">
      <div className="About">
        <About />
      </div>
    </div>
    );
}

export default TeamDashPage;
