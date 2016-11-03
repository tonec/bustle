import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from './common';

class Search extends Component {

    render() {
        return (
            <View style={styles.containerStyles}>
                <Input
                    label={'Location:'}
                    placeholder={'Location'}
                    value={''}
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
