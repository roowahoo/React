import logo from './logo.svg';
import './App.css';
import React from 'react';
import pooPoo from './poopoo.jpg'

function App() {
    return (
        <React.Fragment>
            <h1 className='header'>Hello</h1>
            <p>hoooooomann</p>
            <p style={{
                fontFamily:'monospace',
                fontSize:'30px',
                
            }}>pee pee poo poo</p>
            <h5>pee pee poo poo</h5>
            <h2>pew pew</h2>
            <img src={require('./puppy.jpg').default} />
            <img src={pooPoo} />

        </React.Fragment>
    );
}

export default App;
