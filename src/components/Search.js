import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GetCurrentLocation from '../services/GetCurrentLocation';
import { Input, ButtonIcon } from './common';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLocation: 'unknown'
        };
    }

    handleClick() {
        GetCurrentLocation(location => {
            this.setState({ currentLocation: location });
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>

                <Input
                    label={'Location: '}
                    placeholder={'Enter location'}
                    value={this.state.currentLocation}
                >
                    <ButtonIcon
                        iconName={'map-marker'}
                        iconSize={26}
                        iconColor={'#fff'}
                        buttonText={''}
                        onPress={this.handleClick.bind(this)}
                        style={styles}
                    />
                </Input>

                <Input
                    label={'Destination: '}
                    placeholder={'Enter destination'}
                    value={''}
                >
                    <ButtonIcon
                        iconName={'map-marker'}
                        iconSize={26}
                        iconColor={'#fff'}
                        buttonText={''}
                        onPress={() => {}}
                        style={styles}
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
    },
    buttonStyle: {
        marginLeft: 10,
        backgroundColor: 'red'
    }
});

export default Search;
