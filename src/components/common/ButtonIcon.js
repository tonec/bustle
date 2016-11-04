import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonIcon = (props) => {
    const { onPress } = props;

    return (
        <TouchableOpacity style={[styles.buttonStyle]} onPress={onPress}>
            <Text>{props.children}</Text>
            <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
    );
};

ButtonIcon.defaultProps = {
    styles: {}
};

ButtonIcon.propTypes = {
    onPress: PropTypes.func.isRequired,
    styles: PropTypes.object
};

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    iconStyle: {

    }
});

export { ButtonIcon };
