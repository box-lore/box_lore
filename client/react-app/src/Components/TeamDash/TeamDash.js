import React, { Component } from 'react';
import { useTable } from 'react-table';
import './TeamDash.css'

const team1json = require('../../jsons/teamstats/team1-2021.json'); // ATL
const team2json = require('../../jsons/teamstats/team2-2021.json'); // BOS
const team4json = require('../../jsons/teamstats/team4-2021.json');
const team5json = require('../../jsons/teamstats/team5-2021.json');
const team6json = require('../../jsons/teamstats/team6-2021.json');

const team1data = team1json.response;
const team2data = team2json.response;
const team4data = team4json.response;
const team5data = team5json.response;
const team6data = team6json.response;

class TeamDash extends Component{
    render(){
        return(
            <div className='TeamDashboard'>
                <table>
                    <tr className="Headers">
                        <th>Team</th>
                        <th>FG %</th>
                        <th>3pt %</th>
                        <th>FT %</th>
                        <th>Steals</th>
                        <th>Blocks</th>
                        <th>Turnovers</th>
                    </tr>

                    {team1data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>ATL</td>
                                <td>{val.fgp}</td>
                                <td>{val.tpp}</td>
                                <td>{val.ftp}</td>
                                <td>{val.steals}</td>
                                <td>{val.blocks}</td>
                                <td>{val.turnovers}</td>
                            </tr>
                        )
                    })}

                    {team2data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>BOS</td>
                                <td>{val.fgp}</td>
                                <td>{val.tpp}</td>
                                <td>{val.ftp}</td>
                                <td>{val.steals}</td>
                                <td>{val.blocks}</td>
                                <td>{val.turnovers}</td>
                            </tr>
                        )
                    })}

                    {team4data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>NYN</td>
                                <td>{val.fgp}</td>
                                <td>{val.tpp}</td>
                                <td>{val.ftp}</td>
                                <td>{val.steals}</td>
                                <td>{val.blocks}</td>
                                <td>{val.turnovers}</td>
                            </tr>
                        )
                    })}

                    {team5data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>CHL</td>
                                <td>{val.fgp}</td>
                                <td>{val.tpp}</td>
                                <td>{val.ftp}</td>
                                <td>{val.steals}</td>
                                <td>{val.blocks}</td>
                                <td>{val.turnovers}</td>
                            </tr>
                        )
                    })}

                    {team6data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td>CHI</td>
                                <td>{val.fgp}</td>
                                <td>{val.tpp}</td>
                                <td>{val.ftp}</td>
                                <td>{val.steals}</td>
                                <td>{val.blocks}</td>
                                <td>{val.turnovers}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}

export default TeamDash;