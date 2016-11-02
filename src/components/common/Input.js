import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const { label, value, onChangeText, placeholder, secureTextEntry } = props;
    
    const containerStyle = Object.assign({}, styles.containerStyle, props.styles.containerStyle);
    const labelStyle = Object.assign({}, styles.labelStyle, props.styles.labelStyle);
    const inputStyle = Object.assign({}, styles.inputStyle, props.styles.inputStyle);

    return (
        <View style={containerStyle}>

            <Text style={labelStyle}>
                {label}
            </Text>

            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />

        </View>
    );
};

Input.propTypes = {
    secureTextEntry: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    autoCorrect: React.PropTypes.bool,
    value: React.PropTypes.string,
    onChangeText: React.PropTypes.func,
    styles: React.PropTypes.object
};

const styles = {
    inputStyle: {
        color: 'yellow',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderColor: 'red',
        borderWidth: 1
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
