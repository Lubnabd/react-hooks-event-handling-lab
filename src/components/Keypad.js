// Code Keypad Component Here
import React from 'react';

function Keypad (){
     handleChange = () => {
        console.log('Entering password...');

    return (
        <div>
            <input type="password" onChange={this.handleChange}
            /></div>
    )
}
}
export default Keypad;