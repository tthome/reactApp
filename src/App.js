import React from 'react';
import './App.css';
import Button from './Button';

const todoArray = [];

class App extends React.Component {

    state = {
        showDescription: false
    };

    handleClick = (event) => {
        console.log('Click!!! = ', event.target);
        this.setState({showDescription: !this.state.showDescription})
    };

    render() {
        const {showDescription} = this.state;
        return (
            <div className="App">
                <Button handleButtonClick={this.handleClick} description={showDescription ? 'Well done' : ''}/>
            </div>
        );
    }
}

export default App;
