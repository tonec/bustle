import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Geocoder from '../services/Geocoder';
import { Input } from './common';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPosition: 'unknown'
        };
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { longitude, latitude } = position.coords;

                Geocoder.setApiKey('AIzaSyDb3TSwTYnXVxkQJOdEY04klpGK9w-xhvw');

                Geocoder.getFromCoords({
                    lat: latitude,
                    lng: longitude
                }).then(
                    json => {
                        console.log(json.results[0]);
                        const location = json.results[0].formatted_address;
                            this.setState({ currentPosition: location });
                        },
                    error => {
                        alert(error);
                        }
                );
            },
            (error) => {
                alert(JSON.stringify(error));
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
    }

    render() {
        return (
            <View style={styles.containerStyles}>
                <Input
                    label={'Location:'}
                    placeholder={'Location'}
                    value={this.state.currentPosition}
                />
                <Input
                    label={'Destination:'}
                    placeholder={'Current location'}
                    value={''}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

export default Search;
