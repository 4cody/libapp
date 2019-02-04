import React from 'react';

const formInput = props => (
    <div className="form-check">
    <label>
        <input 
        type='radio'
        name='search-input'
        value={props.vType}
        checked={props.isChecked}
        onChange={props.change}
        className={props.class}
        />
        {props.innerValue}
    </label>
    </div>
)

export default formInput;