import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch1-kaku" className="btn from-left">第一課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch1-yomerebaii" className="btn from-right">第一課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch3-yomerebaii" className="btn from-right">第三課　読めればいい</button></Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;