import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
    getInitialState: function() {
        return {first: '', last: '', start: ''};
    },
    handleFirstChange: function(e) {
        this.setState({first: e.target.value});
    },
    handleLastChange: function(e) {
        this.setState({last: e.target.value});
    },
    handleStartChange: function(e) {
        this.setState({start: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var first = this.state.first.trim();
        var last = this.state.last.trim();
        var start = this.state.start.trim();
        if (!first || !last || !start) {
            return;
        }
        this.props.onPersonSubmit({first: first, last: last, start: start});
        this.setState({first: '', last: '', start: ''});
    },
    render: function() {
        return (
            <form className="PersonForm" onSubmit={this.handleSubmit}>
                <input className="ui-widget ui-corner-all" type="text" placeholder="first name..."
                    value={this.state.first} onChange={this.handleFirstChange}
                />
                <input className="ui-widget ui-corner-all" type="text" placeholder="last name..."
                    value={this.state.last} onChange={this.handleLastChange}
                />
                <input className="ui-widget ui-corner-all" type="text" placeholder="start date..."
                    value={this.state.start} onChange={this.handleStartChange}
                />
                <input className="ui-button ui-widget ui-corner-all" type="submit" value="Submit" />
            </form>
        );
    }
});
