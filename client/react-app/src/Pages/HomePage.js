import './HomePage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../Components/Sidebar/Sidebar.js';
import StandingsTable from '../Components/StandingsTable/StandingsTable.js';
import UpcomingGames from '../Components/UpcomingGames/UpcomingGames.js';
import Navbar from "../Components/Navbar/NavBar.js";

function HomePage() {
    return (
    <div className="HomePage">
      <div className="StandingsTable">
        <StandingsTable />
        <p/>
        <UpcomingGames />
      </div>
    </div>
    );
}

export default HomePage;