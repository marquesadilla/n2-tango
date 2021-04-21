import React from 'react';
import kanji from './kanji';
import './kanji.css';

class Yomu extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            characters: ["紹介"],
            num: 0,
            shuffleHide: "",
            yomikataButton: "",
            yomikataClass: "d-none",
            imiButton: "",
            imiClass: "d-none",
            prevDis: true,
            nextDis: false,
        };
    }

    componentDidMount(){
        this.setState(state => {
            const characters = this.state.characters.concat(Object.keys(kanji.yomerebaii));
            characters.splice(0, 1)
            this.setState({ characters: characters });
        })
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
        this.setState({ characters: arr, shuffleHide: "d-none" });
    }

    prevChar = () => {
        this.setState({ num: this.state.num - 1 });
        if(this.state.nextDis){
            this.setState({ nextDis: false });
        }
        if(this.state.num === 1) {
            this.setState({ prevDis: true });
        }

        this.setState({ yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none" });
    }

    nextChar = () => {
        this.setState({ num: this.state.num + 1 });
        if(this.state.prevDis){
            this.setState({ prevDis: false });
        }
        if (this.state.num === this.state.characters.length - 2) {
            this.setState({ nextDis: true });
        }


        this.setState({ yomikataButton: "", yomikataClass: "d-none", imiButton: "", imiClass: "d-none" });
    }

    yomikata = () => {
        this.setState({ yomikataButton: "d-none", yomikataClass: "" });
    }

    imi = () => {
        this.setState({ imiButton: "d-none", imiClass: "" });
    }

    render() {
        const { characters, num, shuffleHide, yomikataButton, yomikataClass, imiButton, imiClass, prevDis, nextDis } = this.state;

        return (
            <React.Fragment>
                <div className="btnContainer">
                    <button onClick={this.prevChar} disabled={prevDis}>Prev</button>
                    <button className={shuffleHide} onClick={this.shuffleArray}>Shuffle</button>
                    <button onClick={this.nextChar} disabled={nextDis}>Next</button>
                </div>
                <h3>読めればいい漢字</h3>
                <div className="kanjiContainer">
                    <h1 className="kanji">{characters[num]}</h1>
                </div>
                <div className="center">
                    <button className={yomikataButton} onClick={this.yomikata}>読み方</button>
                    <h3 className={yomikataClass}> {kanji.yomerebaii[characters[num]].読み方}</h3>
                </div>
                <div className="center">
                    <button onClick={this.imi} className={imiButton}>意味</button>
                    <h3 className={imiClass}>{kanji.yomerebaii[characters[num]].form}</h3>
                </div>
                <div className="center">
                    <h3 className={imiClass}>{kanji.yomerebaii[characters[num]].意味}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default Yomu;