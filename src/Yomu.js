import React from 'react';
import kanji from './kanji';
import './kanji.css';
import unit1_1 from './chapters/unit1_1';
import unit1_2 from './chapters/unit1_2';
import unit2_1 from './chapters/unit2_1';
import unit2_2 from './chapters/unit2_2';

class Yomu extends React.Component {
    constructor(props) {
        super (props);
        console.log(this.props);

        const params = new URLSearchParams(props.location.serach);
        var test = props.location.search;
        console.log(test);
        if (test==='?set=tango'){
            this.state={
                characters: Object.keys(kanji.tango),
                set: "tango",
                setName: "全ての単語",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=kanji-yomerebaii'){
            this.state={
                characters: Object.keys(kanji.yomerebaii),
                set: "yomu",
                setName: "全ての読み漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=kanji-kaku'){
            this.state={
                characters: Object.keys(kanji.kaku),
                set: "kaku",
                setName: "全ての書き漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=u1-tango-1'){
            this.state={
                characters: Object.keys(unit1_1.tango),
                set: "tango",
                setName: "U1 単語 1",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            }
        }
        else if (test==='?set=u1-kaku-1') {
            this.state = {
                characters: Object.keys(unit1_1.kaku),
                set: "kaku",
                setName: "U1_1 書き方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u1-yomu-1') {
            this.state = {
                characters: Object.keys(unit1_1.yomerebaii),
                set: "yomu",
                setName: "U1_1 読み方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u1-tango-2'){
            this.state={
                characters: Object.keys(unit1_2.tango),
                set: "tango",
                setName: "U1 単語 2",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u1-kaku-2') {
            this.state = {
                characters: Object.keys(unit1_2.kaku),
                set: "kaku",
                setName: "U1_2 書き方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u1-yomu-2') {
            this.state = {
                characters: Object.keys(unit1_2.yomerebaii),
                set: "yomu",
                setName: "U1_2 読み方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u2-tango-1'){
            this.state={
                characters: Object.keys(unit2_1.tango),
                set: "tango",
                setName: "U2 単語 1",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u2-kaku-1') {
            this.state = {
                characters: Object.keys(unit2_1.kaku),
                set: "kaku",
                setName: "U2_1 書き方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u2-yomu-1') {
            this.state = {
                characters: Object.keys(unit2_1.yomerebaii),
                set: "yomu",
                setName: "U2_1 読み方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u2-tango-2'){
            this.state={
                characters: Object.keys(unit2_2.tango),
                set: "tango",
                setName: "U2 単語 2",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u2-kaku-2') {
            this.state = {
                characters: Object.keys(unit2_2.kaku),
                set: "kaku",
                setName: "U2_2 書き方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }
        else if (test==='?set=u2-yomu-2') {
            this.state = {
                characters: Object.keys(unit2_2.yomerebaii),
                set: "yomu",
                setName: "U2_2 読み方を覚える漢字",
                num: 0,
                shuffleHide: "",
                yomikataButton: "",
                yomikataClass: "d-none",
                imiButton: "",
                imiClass: "d-none imi",
                prevDis: true,
                nextDis: false,
            };
        }

    }

    componentDidMount(){
        this.setState(state => {
            //this.setState({ num: this.state.characters.length-1 }); // DELETE LATER
        });
    }

    shuffleArray = () => {
        var arr = this.state.characters;
        var i, j, temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        if (this.state.num === this.state.characters.length - 1) {
            this.setState({ nextDis: false });
        }
        this.setState({ characters: arr, shuffleHide: "d-none", yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none imi", num: 0, prevDis: true });
    }

    prevChar = () => {
        this.setState({ num: this.state.num - 1 });
        if(this.state.nextDis){
            this.setState({ nextDis: false });
        }
        if(this.state.num === 1) {
            this.setState({ prevDis: true });
        }

        this.setState({ yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none imi" });
    }

    nextChar = () => {
        this.setState({ num: this.state.num + 1 });
        if(this.state.prevDis){
            this.setState({ prevDis: false });
        }
        if (this.state.num === this.state.characters.length - 2) {
            this.setState({ nextDis: true, shuffleHide: "" });
        }


        this.setState({ yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none imi" });
    }

    yomikata = () => {
        this.setState({ yomikataButton: "d-none", yomikataClass: "" });
    }

    imi = () => {
        this.setState({ imiButton: "d-none", imiClass: "imi" });
    }

    render() {
        const { characters, set, setName, num, shuffleHide, yomikataButton, yomikataClass, imiButton, imiClass, prevDis, nextDis } = this.state;

        const setChooser = () => {
            if (set==="yomu") {
                return kanji.yomerebaii[characters[num]].読み方
            }
            else if (set==="kaku") {
                return kanji.kaku[characters[num]].読み方
            }
            else if (set==="tango") {
                return kanji.tango[characters[num]].読み方
            }
        }

        const formSet = () => {
            if (set==="yomu") {
                return kanji.yomerebaii[characters[num]].form
            }
            else if (set==="kaku") {
                return kanji.kaku[characters[num]].form
            }
            else if (set==="tango") {
                return kanji.tango[characters[num]].form
            }
        }

        const imiSet = () => {
            if (set==="yomu") {
                return kanji.yomerebaii[characters[num]].意味
            }
            else if (set==="kaku") {
                return kanji.kaku[characters[num]].意味
            }
            else if (set==="tango") {
                return kanji.tango[characters[num]].意味
            }
        }

        return (
            <React.Fragment>
                <div className="btnContainer">
                    <button onClick={this.prevChar} disabled={prevDis}>Prev</button>
                    <button className={shuffleHide} onClick={this.shuffleArray}>Shuffle</button>
                    <button onClick={this.nextChar} disabled={nextDis}>Next</button>
                </div>
                <h3>{setName}</h3>
                <div className="kanjiContainer">
                    <h1 className="kanji">{characters[num]}</h1>
                </div>
                <div className="center">
                    <button className={yomikataButton} onClick={this.yomikata}>読み方</button>
                    <h2 className={yomikataClass}> {setChooser()}</h2>
                </div>
                <div className="center">
                    <button onClick={this.imi} className={imiButton}>意味</button>
                    <h3 className={imiClass}>{formSet()}</h3>
                </div>
                <div className="center">
                    <h3 className={imiClass}>{imiSet()}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default Yomu;