import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Landing.css'
import Catalog from './Catalog';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: ['Yoram','Gal','Sharon','Rachel']
        }
    }
    render() {
        return (
                <div>
                    <h1 id="home-title1">Who's watching?</h1>
        
                    <div id="home-container1">
                        <div id="user1">
                            <Link to="/catalog">
                                <span className="main-directory-text">{this.state.users[0]}</span>
                            </Link>
                        </div>
                        <div id="user2">
                            <Link to="/catalog">
                                <span className="main-directory-text">{this.state.users[1]}</span>
                            </Link>
                        </div>
                        <div id="user3">
                            <Link to="/catalog">
                                <span className="main-directory-text">{this.state.users[2]}</span>
                            </Link>
                        </div>
                        <div id="user4">
                            <Link to="/catalog">
                                <span className="main-directory-text">{this.state.users[3]}</span>
                            </Link>
                        </div>
                    </div>
                    
                </div>
        )
    }
}

export default Landing