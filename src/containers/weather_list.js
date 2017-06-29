import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(element) {
        console.log(element);
        const temps = element.list.reduce((memo, curr, index) => {
            memo[index] = curr.main.temp;
            return memo;
        }, []);
        console.log(temps);
        return (
            <tr key={ element.city.id }>
                <td>{ element.city.name }</td>
                <td>
                    <Sparklines height={100} width={100} data={temps}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
            </tr>
        );
    };
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp.</th>
                        <th>Press.</th>
                        <th>Humid.</th>
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