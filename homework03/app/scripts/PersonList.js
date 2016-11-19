
import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Person from './Person';

module.exports = React.createClass({
    render: function() {
        var personNodes = this.props.data.map(function(person) {
            return (
                <Person first={person.firstName} last={person.lastName} start={person.startDate} key={person.id}>
                    {person.firstName, person.lastName, person.startDate}
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
