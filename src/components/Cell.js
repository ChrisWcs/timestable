import React from 'react';
import PropTypes from 'prop-types';

const style = {
    background: "white",
    width: "50px",
    height: "50px",
    border: "solid 1px black",
    cursor: "pointer"
};

const Cell = ({ num, func }) => (
    <button style={style} onClick={ func }>{num}</button>
);

export default Cell;