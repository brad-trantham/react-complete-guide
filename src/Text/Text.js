import React from 'react';

const text = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changeHandler} value={props.word}/>
            <p>{props.count}</p>
        </div>
    )};

export default text;