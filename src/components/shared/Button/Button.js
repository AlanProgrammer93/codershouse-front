import React from 'react'
import './Button.css';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className="button">
            <span>{text}</span>
            <img className="arrow" src="/images/arrow-forward.png" alt="arrow" />
        </button>
    )
}

export default Button
