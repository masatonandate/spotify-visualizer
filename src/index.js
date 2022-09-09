import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import './Styles/App.css'
import App from './App';
import Draggable from 'react-draggable';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>
// )

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();