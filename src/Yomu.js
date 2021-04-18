import React from 'react';
import kanji from './kanji';
import chapter1 from './chapters/chapter1';
import chapter11 from './chapters/chapter11';

class Yomu extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            characters: [],
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
        console.log(arr);
        var i, j, temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log(arr);
        this.setState({ characters: arr });
        console.log("shuffled");
    }

    render() {
        const { characters } = this.state;
        return (
            <React.Fragment>
                <h1>読めればいい漢字</h1>
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

export default Yomu;