import React, { Component } from "react";

class Schedule extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <tr key={this.props.index}>
                <td width="5%"><i className="fa fa-bell-o"></i></td>
                <td>{this.props.matchup}</td>
                <td>{this.props.time}</td>
                <td className="level-right"><a className="button is-small is-primary" href="#">Action</a></td>
            </tr>


        );

    }
}


export default Schedule;