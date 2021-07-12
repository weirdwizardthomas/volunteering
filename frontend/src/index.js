import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './stylesheets/index.css';
import Container from "./components/container";

import "./stylesheets/App.css"

ReactDOM.render(
    <React.StrictMode>
        <Container/>
    </React.StrictMode>,
    document.getElementById('root')
);

