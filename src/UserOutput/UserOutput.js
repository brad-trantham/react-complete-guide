import React from 'react';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.username}, this is the first paragraph</p>
            <p style={props.style}>This is the second paragraph, {props.username}</p>
        </div>
    )};

export default userOutput;