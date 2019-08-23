import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Counter from './components/counter' //penamaan class harus huruf capital didepannya. contoh ini mengimport class Counter
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css' //import file bootstrap.css agar bisa digunakan secara global

ReactDOM.render(<Counter />, document.getElementById('root')); //masukan component counter kedalam file index.html di public dengan id tag root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
