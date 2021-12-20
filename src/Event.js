import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (


            <tr key={this.props.index}>
                <td width="5%"><i className="fa fa-bell-o"></i></td>
                <td>{this.props.title}</td>
                <td className="level-right"><a className="button is-small is-primary" href="#" title="action">Action</a></td>
            </tr>

        );

    }
}


export default Event;