import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const h = React.createElement;
import thunk from 'redux-thunk';

import AppContainer from './components/AppContainer';

import appReducer from './reducers';

const store = createStore(appReducer, thunk);

store.dispatch(userRequest())

ReactDOM.render(
    h(Provider, {
            store: store
        },
        h(AppContainer)
    ),
    document.getElementById('app')
);
