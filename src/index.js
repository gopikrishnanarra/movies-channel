import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {combineReducers, createStore} from 'redux'
import './index.css';
import App from './components/App'
import reducers from "./reducers/reducers";

const store = createStore(combineReducers({
    data: reducers,
}));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
