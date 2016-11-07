import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/SearchActions';
import GetCurrentLocation from '../services/GetCurrentLocation';
import { Input, ButtonIcon } from './common';

class Search extends Component {

    handleClick() {
        GetCurrentLocation(location => {
            this.props.currentLocationChanged(location);
        });
    }

    handleLocationChange(text) {
        this.props.locationTextChanged(text);
    }

    handleDestinationChange(text) {
        this.props.destinationTextChanged(text);
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.containerStyle}>

                <KeyboardAvoidingView behavior='padding'>
                    <Input
                        label={'Location: '}
                        placeholder={'Search location'}
                        onChangeText={this.handleLocationChange.bind(this)}
                        value={this.props.currentLocation}
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
                        placeholder={'Search destination'}
                        onChangeText={this.handleDestinationChange.bind(this)}
                        value={this.props.currentDestination}
                    />
                </KeyboardAvoidingView>

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

const mapStateToProps = ({ search }) => {
    const { currentLocation, currentDestination, locationList } = search;
    return { currentLocation, currentDestination, locationList };
};

export default connect(mapStateToProps, SearchActions)(Search);
