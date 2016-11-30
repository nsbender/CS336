import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Comment from './Comment';

module.exports = React.createClass({
    render: function() {
        var CommentNodes = this.props.data.map(function(comment) {
            return (
                <Comment id={comment.id} author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="CommentList">
                {CommentNodes}
            </div>
        );
    }
});
