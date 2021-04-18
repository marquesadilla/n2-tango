import React from 'react';
import kanji from './kanji';
import './kanji.css';

class Yomu extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            characters: [],
            num: 0,
            shuffleHide: "shuffleBtn"
        };
    }

    componentDidMount(){
        this.setState(state => {
            const characters = this.state.characters.concat(Object.keys(kanji.yomerebaii));
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
        if(this.state.num === 0) {
            this.setState({ num: this.state.characters.length - 1 });
        }
        else{
            this.setState({ num: this.state.num - 1 });
        }
    }

    nextChar = () => {
        if (this.state.num === this.state.characters.length - 1) {
            this.setState({ num: 0 });
        }
        else {
            this.setState({ num: this.state.num + 1 });
        }
    }

    render() {
        const { characters, num, shuffleHide } = this.state;
        return (
            <React.Fragment>
                <button className={shuffleHide} onClick={this.shuffleArray}>Shuffle</button>
                <div className="btnContainer">
                    <button onClick={this.prevChar}>Prev</button>
                    <button onClick={this.nextChar}>Next</button>
                </div>
                <h3>読めればいい漢字</h3>
                <div className="kanjiContainer">
                    <h1 className="kanji">{characters[num]}</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Yomu;