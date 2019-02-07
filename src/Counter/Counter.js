import React from 'react';

import { increment, decrement } from './actions';
import { getCount } from './selectors';
import { getContext } from '../state';

const Counter = () => {
    const { state, setState } = getContext();
    const count = getCount(state);

    return (
        <div>
            Count: {count}
            <button onClick={() => setState(increment)}>+</button>
            <button onClick={() => setState(decrement)}>-</button>
        </div>
    );
};

export default Counter;
