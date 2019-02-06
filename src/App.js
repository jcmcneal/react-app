import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from '@relax-js/react-relax';

import './WebSocket/WebSocket';
import store from './store';

import './App.less';
import './FontAwesome';

import Header from './Header/Header';
import Amp from './Amp/Amp';

const App = () => (
    <Provider store={store}>
        <Header />
        <section className={'container-fluid mt-4'}>
            <Amp />
        </section>
    </Provider>
);

/** HMR */
hot(module)(App);

ReactDOM.render(<App />, document.getElementById('app'));
