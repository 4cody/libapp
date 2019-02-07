import React from 'react';

const genreButton = props => (
    <button
      onClick={props.hgk}
      className="dropdown-item"
      type="button"
      value={props.val}>
    {props.innerVal}
    </button>
)

export default genreButton;