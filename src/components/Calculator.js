import React, {Component} from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueA: 0,
            valueB: 0,
        }
    }
    setValue = (val, key) => {
        const newVal = parseInt(val),
        newState = {};
        if(typeof key === 'string') {
            // if value of input is empty or 0, make the value in state 0.
            if(!val) {
                newState[key] = 0;
            // If val is successfully parsed to a number, then set appropriate state.
            } else if(!isNaN(newVal)) {
                newState[key] = newVal;
            }
            if(typeof newState[key] === 'number') this.setState(newState);
        }
    }
    render() {
        let result = undefined;
        const a = parseInt(this.state.valueA),
        b = parseInt(this.state.valueB);
        if(!isNaN(this.state.valueA) && !isNaN(this.state.valueB)) {
            result = a + b;
        }
        return (
            <div>
                <div><input type="num" value={this.state.valueA} onChange={(e) => this.setValue(e.target.value, 'valueA')} /></div>
                <div><input type="num" value={this.state.valueB} onChange={(e) => this.setValue(e.target.value, 'valueB')} /></div>
                {!isNaN(result)
                    ? <div>{result}</div>
                    : null
                }
            </div>
        );
    }
}