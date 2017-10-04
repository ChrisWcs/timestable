import React from 'react';

const style = {
    textAlign: "center"
};

const Answer = ({x, y}) => (
    <h1>{x} x {y} = {x*y}</h1>
);

export default Answer;