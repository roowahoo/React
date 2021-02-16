import React from 'react';
//a CLASS-based Component
//1. a class ia a container that can contain variables and functions
//2. a class can be cloned. It's like a prototype. The clone is known as instances.
//a class is like a definition of an entity
// an instance of a class is specific eg of that entity

class NumberBox extends React.Component {
    state = {
        'count': 10
    }
    
    render() {
        console.log("rendering");
        return (
            <React.Fragment>
            <div style={{
                'border': '1px solid black',
                'color': this.props.color || 'black',
                'padding':'10px',
                'width':'25px'
            }}>
                <span style={{
                    fontSize: this.state.count * 2 + 10
                }}>{this.state.count}</span>
            
            </div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            </React.Fragment>
        )
    }

    increment=()=>{
        this.setState({
            'count':this.state.count+1
        })
    }
}

export default NumberBox;