import React, { Component } from "react";
import './Admin.css';

// component
import Event from './Event';
import Schedule from "./Schedule";
import Scores from "./Scores";


const events = [
    {
        title: 'Raiders-Browns shifts to Mon.; 2 games on Tues.'
    },
    {
        title: 'Saints coach Payton again tests positive for virus'

    },
    {
        title: 'TE Parham suffered concussion, to leave hospital'

    },
    {
        title: 'Pats RB Harris out vs. Colts with hamstring injury'

    },
    {
        title: 'Harbaugh: Lamar may play, but still no practice'

    },
    {
        title: 'Packers Rodgers not practicing but ready to go'

    }
];

const schedules = [
    {
        matchup: 'Carolina at Buffalo',
        time: '10am'
    },
    {
        matchup: 'Arizona at Detriot',
        time: '10am'
    },
    {
        matchup: 'New York at Miami',
        time: '10am'
    },
    {
        matchup: 'Dallas at New York',
        time: '10am'
    },
    {
        matchup: 'Tennessee at Pittsburgh',
        time: '10am'
    }

];

const scoress = [
    {
        teamOne: 'Patriots 17',
        teamTwo: 'Colts 27'
    },
    {
        teamOne: 'Cheifs 34',
        teamTwo: 'Chargers 28'
    },
    {
        teamOne: 'Panthers 21',
        teamTwo: 'Bills 42'
    },
    {
        teamOne: 'Jets 9',
        teamTwo: 'Dolphins 21'
    },
    {
        teamOne: 'Cowboys 36',
        teamTwo: 'Giants 3'
    }
];

const displayEvents = events.map((event, idx) => {
    return (
        <Event key={idx} index={idx} title={event.title} />

    )
})

const displaySchedules = schedules.map((schedule, idx) => {
    return (
        <Schedule key={idx} index={idx} matchup={schedule.matchup} time={schedule.time} />

    )
})

const displayScoress = scoress.map((scores, idx) => {
    return (
        <Scores key={idx} index={idx} teamOne={scores.teamOne} teamTwo={scores.teamTwo} />

    )
})

class Admin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item brand-text" href="../index.html">
                                NFL
                            </a>
                            <div className="navbar-burger burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navMenu" className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item" href="admin.html">
                                    Home
                                </a>
                                <a className="navbar-item" href="admin.html">
                                    Orders
                                </a>
                                <a className="navbar-item" href="admin.html">
                                    Payments
                                </a>
                                <a className="navbar-item" href="admin.html">
                                    Exceptions
                                </a>
                                <a className="navbar-item" href="admin.html">
                                    Reports
                                </a>
                            </div>


                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 ">
                            <aside className="menu is-hidden-mobile">
                                <p className="menu-label">
                                    General
                                </p>
                                <ul className="menu-list">
                                    <li><a className="is-active">Dashboard</a></li>
                                    <li><a>Customers</a></li>
                                    <li><a>Other</a></li>
                                </ul>
                                <p className="menu-label">
                                    Administration
                                </p>
                                <ul className="menu-list">
                                    <li><a>Team Settings</a></li>
                                    <li>
                                        <a>Manage Your Team</a>
                                        <ul>
                                            <li><a>Members</a></li>
                                            <li><a>Plugins</a></li>
                                            <li><a>Add a member</a></li>
                                            <li><a>Remove a member</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Invitations</a></li>
                                </ul>
                                <p className="menu-label">
                                    NFL
                                </p>
                                <ul className="menu-list">
                                    <li><a>NFC</a></li>
                                    <li><a>AFC</a></li>
                                    <li><a>Playoffs</a></li>
                                    <li><a>Superbowl</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column is-9">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                <ul>
                                    <li><a href="../">NFL</a></li>
                                    <li><a href="../">AFC</a></li>
                                    <li><a href="../">NFC</a></li>
                                    <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
                                </ul>
                            </nav>
                            <section className="hero is-info welcome is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title">
                                            Football-News
                                        </h1>
                                    
                                    </div>
                                </div>
                            </section>
                            <section className="info-tiles">
                                <div className="tile is-ancestor has-text-centered">
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">439k</p>
                                            <p className="subtitle">Tom Brady</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">59k</p>
                                            <p className="subtitle">Patrick Mahomes</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">3.4k</p>
                                            <p className="subtitle">Aaron Rodgers</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">19</p>
                                            <p className="subtitle">Ben Roethlisberger</p>
                                        </article>
                                    </div>
                                </div>
                            </section>
                            <div className="columns">
                                <div className="column is-6">
                                    <div className="card events-card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Events
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-table">
                                            <div className="content">
                                                <table className="table is-fullwidth is-striped">
                                                    <tbody>

                                                        {displayEvents}
                                                        
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Schedules
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <div className="control has-icons-left has-icons-right">
                                                    
                                                    {displaySchedules}
                                                    <span className="icon is-medium is-left">
                                                        <i className="fa fa-search"></i>
                                                    </span>
                                                    <span className="icon is-medium is-right">
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Scores
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <div className="control has-icons-left has-icons-right">
                                                    
                                                    {displayScoress}
                                                    <span className="icon is-medium is-left">
                                                        <i className="fa fa-search"></i>
                                                    </span>
                                                    <span className="icon is-medium is-right">
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Admin;