import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './container/StatefullComponent';
import Login from './container/Login';
import BlogPost from './container/BlogPost/BlogPost';
import MhsPost from './container/MhsPost/MhsPost';
// function HelloWorld(){
//     return <p> ini adalah function component </p>
// }

// const HelloWorld = () => {
//     return <p> ini adalah arrow function </p>
// }

// class Statefull extends React.Component {
//     render(){
//     return <h1>Hello, {this.props.name}</h1>
//     }
// }

ReactDOM.render(<MhsPost />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
