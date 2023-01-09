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

                <h1 className="text-center">全ての単語</h1>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="tango" className="btn from-left">単語</button></Link>
                    {/* <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-kaku" className="btn from-left">書き漢字</button></Link>
                    // <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="kanji-yomerebaii" className="btn from-right">読み漢字</button></Link> 
                    */}
                </div>

                <h1 className="text-center">第一章</h1>
                <h2 className="text-center">人と人との関係</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-tango-1" className="btn from-left">家族</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">友達</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-tango-3" className="btn from-left">知人・付き合い</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-4" className="btn from-left">恋人</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-5" className="btn from-left">関係悪化</button></Link>
                    {/*
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-kaku-1" className="btn from-left">U1書き漢字1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-yomu-1" className="btn from-right">U1読み漢字1</button></Link>
                    */}
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango" className="btn from-left">第一章全ての単語</button></Link>
                </div>

                <h1 className="text-center">第二章</h1>
                <h2 className="text-center">暮らし</h2>
                
                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">住まい</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">お金</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">食事</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">買い物</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u1-tango-2" className="btn from-left">時を表す言葉</button></Link>
                    {/*
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-kaku-2" className="btn from-left">U1書き漢字2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u1-yomu-2" className="btn from-right">U1読み漢字2</button></Link>
                    */}
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango" className="btn from-left">第二章全ての単語</button></Link>
                </div>

                <h1 className="text-center">第三章</h1>
                <h2 className="text-center">家で</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">朝</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">日課</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">料理</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">家事</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">引っ越し</button></Link>
                    {/*
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-kaku-1" className="btn from-left">U2書き漢字1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-yomu-1" className="btn from-right">U2読み漢字1</button></Link>
                    */}
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u3-tango" className="btn from-left">第三章全ての単語</button></Link>
                </div>

                <h1 className="text-center">第四章</h1>
                <h2 className="text-center">町</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">町</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">役所</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">ふるさと</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">交通</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">産業</button></Link>
                </div>

                <h1 className="text-center">第五章</h1>
                <h2 className="text-center">学校で</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">学校</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">勉強</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">試験</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">大学・大学院</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">パソコン（スマホ）</button></Link>
                </div>

                <h1 className="text-center">第六章</h1>
                <h2 className="text-center">会社で</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">就職</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">会社</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">仕事</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">上下関係</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">退職・転職</button></Link>
                </div>

                <h1 className="text-center">第七章</h1>
                <h2 className="text-center">お気に入り</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">競技</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">ファション</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">エンターテインメント</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">本</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">趣味・好み</button></Link>
                </div>

                <h1 className="text-center">第八章</h1>
                <h2 className="text-center">お気に入り</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">気候と天気</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">台風・地震</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">自然</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">休日</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">旅行</button></Link>
                </div>

                <h1 className="text-center">第九章</h1>
                <h2 className="text-center">健康のために</h2>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">体と健康</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">病気になる前に</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">症状</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">病気と治療</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u2-tango-1" className="btn from-left">美容</button></Link>
                </div>

                {/*

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-tango-2" className="btn from-left">U2単語2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-kaku-2" className="btn from-left">U2書き漢字2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u2-yomu-2" className="btn from-right">U2読み漢字2</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-1" className="btn from-left">U3単語1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-kaku-1" className="btn from-left">U3書き漢字1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-yomu-1" className="btn from-right">U3読み漢字1</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-2" className="btn from-left">U3単語2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-kaku-2" className="btn from-left">U3書き漢字2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-yomu-2" className="btn from-right">U3読み漢字2</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u3-tango-2-sankou" className="btn from-left">U3参考にする単語2</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-tango-1" className="btn from-left">U4単語1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-kaku-1" className="btn from-left">U4書き漢字1</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-yomu-1" className="btn from-right">U4読み漢字1</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-tango-2" className="btn from-left">U4単語2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u4-kaku-2" className="btn from-left">U4書き漢字2</button></Link>
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button disabled onClick={this.clickedKanjiSet} value="u4-yomu-2" className="btn from-right">U4読み漢字2</button></Link>
                </div>

                <div className="homeButtonContainer">
                    <Link to={`/kanji?set=${kanjiSetClick}`}><button onClick={this.clickedKanjiSet} value="u4-tango-2-sankou" className="btn from-left">U4参考にする単語2</button></Link>
                </div>

                */}

            </React.Fragment>
        )
    }
}

export default Home;