import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/base.css'
import './assets/style/index.css'
import * as serviceWorker from './serviceWorker';
import {
    Provider
} from 'react-redux';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import store from './store'
import axios from 'axios'
axios.interceptors.request.use(config=>{
    console.log(config);
    // config.url="http://118.31.103.23"+config.url;
    return config;
})
axios.interceptors.response.use(({data})=>{
    return data
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
