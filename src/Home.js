import React from 'react';
import { Link } from 'react-router-dom';
import chapter1 from './chapters/chapter1';
import chapter11 from './chapters/chapter11';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="homeButtonContainer">
                    <button className="btn from-left">書くのを覚える</button>
                    <Link to={`/読めればいい`}><button className="btn from-right">読めればいい</button></Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;