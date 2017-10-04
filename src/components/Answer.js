import React from 'react';

const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const Answer = ({x, y}) => (
    <div style={rowStyle}>
        <h1>{x} x {y} = {x*y}</h1>
    </div>
);

export default Answer;