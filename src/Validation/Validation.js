import React from 'react';

const validation = (props) => {
    return (
        <p>{props.letterCount > 5 ? 'cool' : 'uncool'}</p>
    );
}

export default validation;