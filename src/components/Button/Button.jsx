import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <button className={props.class} onClick={props.onClick}>
                {props.icon}
        </button>
    )
}

export default Button;

