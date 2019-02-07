import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Context, { dispatch, initialState } from './state';

import './App.less';
import './FontAwesome';

import Header from './Header/Header';
import Counter from './Counter/Counter';

const App = () => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={{
            state,
            setState: (...args) => setState(dispatch(state, ...args)),
        }}>
            <Header />
            <section className={'container-fluid mt-4'}>
                <Counter />
            </section>
        </Context.Provider>
    );
};

/** HMR */
hot(module)(App);

ReactDOM.render(<App />, document.getElementById('app'));
