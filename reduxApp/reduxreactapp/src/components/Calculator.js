import React from 'react';

function Calculator({ value, inc, add }) {
    return (
        <div>
            value: {value}
            <button onClick={inc}>Inc</button>
            <button onClick={() => add(5)}>Add 5</button>
            <button onClick={() => add(10)}>Add 10</button>
        </div>
    );
}

export default Calculator;
