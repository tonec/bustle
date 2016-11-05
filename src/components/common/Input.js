import React, { PropTypes } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = (props) => {
    const { label, value, onChangeText, placeholder, secureTextEntry } = props;
    const { containerStyle, labelStyle, inputStyle } = props.style;

    return (
        <View style={[styles.containerStyle, containerStyle]}>
            <Text style={[styles.labelStyle, labelStyle]}>
                {label}
            </Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                style={[styles.inputStyle, inputStyle]}
            />
            {props.children}
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    style: PropTypes.object
};

Input.defaultProps = {
    style: {}
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        paddingBottom: 10
    },

    inputStyle: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18,
        lineHeight: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    }
});

export { Input };
