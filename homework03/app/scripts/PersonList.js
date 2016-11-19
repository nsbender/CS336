
import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Person from './Person';

module.exports = React.createClass({
    render: function() {
        var personNodes = this.props.data.map(function(person) {
            return (
                <Person first={person.first} last={person.last} start={person.start}>
                    {person.first}{person.last}{person.start}
                </Person>
            );
        });
        return (
            <div className="PersonList">
                {personNodes}
            </div>
        );
    }
});
