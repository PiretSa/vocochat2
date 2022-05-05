import React from 'react';

function Input({placeholder, onChange, value}) {
    return (
        <div>
            <input placeholder={placeholder}
                   value={value}
            onChange = {(e ) => onChange(e.target.value)}/>
        </div>
    );
}


export default Input;