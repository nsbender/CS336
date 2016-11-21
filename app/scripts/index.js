import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import CommentBox from './CommentBox.js';

import '../css/base.css';

ReactDOM.render(
    <CommentBox url=API_URL pollInterval=POLL_INTERVAL/>,
    document.getElementById('content')
);
