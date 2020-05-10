import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ColorPicker } from './components/ColorPicker';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ColorPicker onClick={color => console.log(color)} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
