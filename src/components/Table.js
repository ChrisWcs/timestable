import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

const Table = ({ hor, ver, func }) => (
    <div style={columnStyle}>
        { ver.map( y => <div key={y} style={rowStyle} >{ hor.map( x => <Cell key={x*yks} num={x*y} func={func(x, y)}/>) }</div> ) }
    </div>
);

export default Table;