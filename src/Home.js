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
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="tango" className="btn from-left">単語</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-kaku" className="btn from-left">書き漢字</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-yomerebaii" className="btn from-right">読み漢字</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-tango-1" className="btn from-left">U1単語1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch1-kaku" className="btn from-left">第一課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch1-yomerebaii" className="btn from-right">第一課読む</button></Link>
                </div>
                
                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch2-kaku" className="btn from-left">第二課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch2-yomerebaii" className="btn from-right">第二課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch3-kaku" className="btn from-left">第三課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch3-yomerebaii" className="btn from-right">第三課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch4-kaku" className="btn from-left">第四課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch4-yomerebaii" className="btn from-right">第四課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch5-kaku" className="btn from-left">第五課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch5-yomerebaii" className="btn from-left">第五課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch6-kaku" className="btn from-left">第六課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch6-yomerebaii" className="btn from-left">第六課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch7-kaku" className="btn from-left">第七課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch7-yomerebaii" className="btn from-left">第七課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch8-kaku" className="btn from-left">第八課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch8-yomerebaii" className="btn from-left">第八課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="ch9-kaku" className="btn from-left">第九課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch9-yomerebaii" className="btn from-left">第九課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="ch10-kaku" className="btn from-left">第十課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch10-yomerebaii" className="btn from-left">第十課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="ch11-kaku" className="btn from-left">第十一課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch11-yomerebaii" className="btn from-left">第十一課読む</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch12-kaku" className="btn from-left">第十二課書く</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="ch12-yomerebaii" className="btn from-left">第十二課読む</button></Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;