import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparklinesChart from '../components/sparkline_chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(element) {
        const temps = element.list.reduce((memo, curr, index) => {
            memo[index] = curr.main.temp;
            return memo;
        }, []);

        const pressure = element.list.map(el => el.main.pressure);
        const humidity = element.list.map(el => el.main.humidity);
        const { lon, lat } = element.city.coord;

        return (
            <tr key={ element.city.id }>
                <td><GoogleMap lon={ lon } lat={ lat } /></td>
                <td><SparklinesChart data={ temps } color="red" units="K" /></td>
                <td><SparklinesChart data={ pressure } color="blue" units="hPa" /></td>
                <td><SparklinesChart data={ humidity } color="orange" units="%" /></td>
            </tr>
        );
    };
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp. (K)</th>
                        <th>Press. (hPa)</th>
                        <th>Humid. (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(element => this.renderWeather(element)) }
                </tbody>
            </table>
        );
    };
};

function mapStateToProps({ weather }) { // Same as const weather = state.weather
    return { weather };
};

export default connect(mapStateToProps)(WeatherList);