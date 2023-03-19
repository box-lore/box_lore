import React, { Component } from 'react';
import { useTable } from 'react-table';
import './StandingsTable.css'

//const seasons = require('../../jsons/seasons.json');
const standings_json = require('../../jsons/standings.json');
const standings_data = standings_json.response[0]

class StandingsTable extends Component {

    render() {
        return (

            <div className="StandingsTable">

                <table>
                    <tr className="Headers">
                        <th></th>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>Pct</th>
                    </tr>


                    {standings_data.map((val, key) => {
                        return (
                            <tr className="Values" key={key}>
                                <td><img
                                    src={val.team.logo}
                                    width={50}
                                    height={'auto'}
                                    alt="new"
                                /></td>
                                <td>{val.team.name}</td>
                                <td>{val.games.win.total}</td>
                                <td>{val.games.lose.total}</td>
                                <td>{val.games.win.percentage}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}
    export default StandingsTable;
    console.log('hello')