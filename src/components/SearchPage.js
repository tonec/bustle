import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from './common';

class SearchPage extends Component {

    render() {
        return (
            <View>
                <Text>Fromdsdsd:</Text>
                <Input
                    styles={styles}
                    placeholder={'Current location'}
                    value={'value'}
                />
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        // color: 'red'
    }
};

export default SearchPage;
