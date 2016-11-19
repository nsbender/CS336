import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';

import PersonBox from './PersonBox.js';

import '../css/base.css';

ReactDOM.render(
    <PersonBox url="/api/people" pollInterval="{2000}"/>,
    document.getElementById('content')
);
