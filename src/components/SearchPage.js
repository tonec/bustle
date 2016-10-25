import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SearchPage extends Component {

    render() {
        return (
            <View>
                <Text>Search page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyles: {
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        color: 'red'
    }
});

export default SearchPage;
