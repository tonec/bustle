import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Globals from '../services/Globals';
import Geocoder from '../services/Geocoder';
import { Input, ButtonIcon } from './common';


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

                Geocoder.setApiKey(Globals.googleApiKey);

                Geocoder.getFromCoords({
                    lat: latitude,
                    lng: longitude
                }).then(json => {
                    const location = json.results[0].formatted_address;
                    this.setState({ currentPosition: location });
                })
                .catch(error => alert(error));
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
            <View style={styles.containerStyle}>

                <Input
                    label={'Location: '}
                    placeholder={'Enter location'}
                    value={''}
                    onPress={() => {}}
                >
                    <ButtonIcon
                        iconName={'map-marker'}
                        iconSize={26}
                        iconColor={'#fff'}
                        buttonText={''}
                        onPress={() => {}}
                    />
                </Input>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

export default Search;
