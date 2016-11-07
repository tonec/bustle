import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { currentLocationChanged } from '../actions/SearchActions';
import GetCurrentLocation from '../services/GetCurrentLocation';
import { Input, ButtonIcon } from './common';

class Search extends Component {

    handleClick() {
        GetCurrentLocation(location => {
            this.props.currentLocationChanged(location);
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>

                <KeyboardAvoidingView behavior='padding'>
                    <Input
                        label={'Location: '}
                        placeholder={'Enter location'}
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
    const { currentLocation, currentDestination } = search;
    return { currentLocation, currentDestination };
};

export default connect(mapStateToProps, { currentLocationChanged })(Search);
