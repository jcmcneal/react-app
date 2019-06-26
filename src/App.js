import React from 'react';
import ReactDOM from 'react-dom';

import './App.less';

const App = () => (
    <section className={'container-fluid mt-4'}>
        React App
    </section>
);

/** HMR */
if (process.env.NODE_ENV === 'development') {
    const { hot } = require('react-hot-loader'); // eslint-disable-line
    hot(module)(App);
}

ReactDOM.render(<App />, document.getElementById('app'));
