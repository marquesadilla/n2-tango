import React from 'react';
import { Link } from 'react-router-dom';
import chapter1 from './chapters/chapter1';
import chapter11 from './chapters/chapter11';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            kanjiSetClick: "",
        }
        
    }

    clickedKanjiSet = (event) => {
        event.preventDefault();
        this.setState({ kanjiSetClick: event.target.value });
        const waitSecs = 100 // 0.1 seconds
        setTimeout(() => {
            window.location.href=`/kanji?set=${event.target.value}`;
        },waitSecs);
    }

    render() {
        const{ kanjiSetClick } = this.state;
        return(
            <React.Fragment>
                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-kaku" className="btn from-left">書くのを覚える</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-yomerebaii" className="btn from-right">読めればいい</button></Link>
                </div>
                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch3-yomerebaii" className="btn from-right">Chapter 3</button></Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;