import { createContext, useContext } from 'react';

/** Define Initial State */
export const initialState = {
    count: 0,
};

/** Create Context */
const Context = createContext(initialState);

/** Getter for state */
export const getContext = () => useContext(Context);

/** Setter for state */
export const dispatch = (state, action) => {
    const changed = (typeof action === 'function')
        ? action({ state })
        : action;

    const next = {
        ...state,
        ...changed,
    };

    return next;
};

export default Context;
