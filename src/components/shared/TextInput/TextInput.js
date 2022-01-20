import React from 'react'
import './TextInput.css';

const TextInput = (props) => {
    return (
        <div>
            <input 
                className="input" 
                style={{ width: props.fullwidth === 'true' ? '100%' : 'inherit' }} 
                type="text" {...props} 
            />
        </div>
    )
}

export default TextInput
