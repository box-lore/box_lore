import './HomePage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import StandingsTable from '../Components/StandingsTable/StandingsTable.js';
import UpcomingGames from '../Components/UpcomingGames/UpcomingGames.js';

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