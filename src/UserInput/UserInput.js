import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return(
        <div className="UserInput">
            <input type="text" onChange={props.changeHandler} value={props.username}/>
        </div>
    )};

export default userInput;