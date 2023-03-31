import React, { Component } from 'react';
import { useTable } from 'react-table';
import './TeamDash.css'

const allteams = ["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers",
    "Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers",
    "Los Angeles Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks",
    "Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs",
    "Toronto Raptors","Utah Jazz","Washington Wizards"]

const getData = {
    getStat(team, stat, season){
        const teamjson = require('../../jsons/teamstats/teamstats' + season + '.json');
        return teamjson.stats[team]['Per Game'][stat];
    },
    getTeamStats(team, season){
        return(
            <tr className="Values">
                <td></td>
                <td>{getData.getStat(team, 'Team', season)}</td>
                <td>{getData.getStat(team, 'FG%', season)}</td>
                <td>{getData.getStat(team, '2P%', season)}</td>
                <td>{getData.getStat(team, '3P%', season)}</td>
                <td>{getData.getStat(team, 'FT%', season)}</td>
                <td>{getData.getStat(team, 'ORB', season)}</td>
                <td>{getData.getStat(team, 'DRB', season)}</td>
                <td>{getData.getStat(team, 'TRB', season)}</td>
                <td>{getData.getStat(team, 'AST', season)}</td>
                <td>{getData.getStat(team, 'TOV', season)}</td>
                <td>{getData.getStat(team, 'STL', season)}</td>
                <td>{getData.getStat(team, 'BLK', season)}</td>
            </tr>
        )
    },
    getTeamsStatsTable(teams, season){
        return(
            <table>
                <tr className="Headers">
                    <th></th>
                    <th>Team</th>
                    <th>FG%</th>
                    <th>2P%</th>
                    <th>3P%</th>
                    <th>FT%</th>
                    <th>ORB</th>
                    <th>DRB</th>
                    <th>TRB</th>
                    <th>AST</th>
                    <th>TOV</th>
                    <th>STL</th>
                    <th>BLK</th>
                </tr>
                <tbody>
                    {allteams.map((val, key) => {
                        return (
                            getData.getTeamStats(val, season)
                        )
                    })}
                </tbody>
            </table>
        )
    }
};

class TeamDash extends Component{
    render(){
        return(
            <div className='TeamDashboard'>
                {getData.getTeamsStatsTable(allteams, '2022')}
            </div>
        );
    }
}

export default TeamDash;