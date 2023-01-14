//create a component button that receives a function and an icon as a props
//and returns a button with the icon and the function as an event listener
import React from 'react';

const Button = (props) => {
    return(
        <button className={props.class} onClick={props.onClick}>
                {props.icon}
        </button>
    )
}

export default Button;

