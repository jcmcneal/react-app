import React from 'react';
import { hydrate } from 'react-dom';

import './App.less';

const App = () => (
    <section className={'container-fluid mt-4'}>
        React App
    </section>
);

/** HMR */
if (process.env.NODE_ENV === 'development') {
    require('react-hot-loader').hot(module)(App); // eslint-disable-line
}

if (process.env.CLIENT_SIDE) {
    hydrate(<App />, document.getElementById('app'));
}

export default App;
