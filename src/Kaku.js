import React from 'react';
import kanji from './kanji';

class Kaku extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            characters: [],
        };
    }

    componentDidMount(){
        this.setState(state => {
            const characters = this.state.characters.concat(Object.keys(kanji.kaku));
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
        this.setState({ characters: arr });
    }

    render() {
        const { characters } = this.state;
        return (
            <React.Fragment>
                <h1>書くのを覚える漢字</h1>
                <button onClick={this.shuffleArray}>Shuffle</button>
                <ul>
                    {characters.map(function(name, index){
                        return <li key={ index }>{name}</li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Kaku;