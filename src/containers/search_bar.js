import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    };

    // All DOM events come with 'event' object
    onInputChange(event) {
        this.setState({ term: event.target.value });
    };

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    };

    render() {
        return (
            <form onSubmit={ this.onFormSubmit.bind(this) } className="input-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Search for a city . . ."
                    value={ this.state.term }
                    onChange={ this.onInputChange.bind(this) }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWeather
    }, dispatch);
};

// null because mappingState is not needed.
export default connect(null, mapDispatchToProps)(SearchBar);