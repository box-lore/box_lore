import React, { Component } from 'react';
import { useTable } from 'react-table';

// const team1json = require('../../jsons/teamstats/team1json.json'); // ATL
// const team2json = require('../../jsons/teamstats/team2json.json');
// const team3json = require('../../jsons/teamstats/team3json.json');
// const team4json = require('../../jsons/teamstats/team4json.json');

const team1data = team1json.response;

class TeamDash extends Component{
    render(){
        return(
            <div className='TeamDashboard'>
                <table>
                    <tr className="Headers">
                        <th></th>
                        <th>Team</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Pct</th>
                    </tr>
                </table>
            </div>
        );
    }
}