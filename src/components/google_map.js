import React, { Component } from 'react';

export default class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render() {
        return(
            // ref allows us to reference the created HTML element by the given value. E.g., this.refs.map
            <div ref="map">

            </div>
        );
    };
};