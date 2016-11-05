import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonIcon = (props) => {
    const { onPress, iconName, iconSize, iconColor, buttonText } = props;
    const { buttonStyle, iconStyle, textStyle } = props.style;

    const iconProps = {
        name: iconName,
        size: iconSize,
        color: iconColor,
        style: [styles.iconStyle, iconStyle]
    };

    let buttonTextElem;
    let iconElem;

    if (iconName) {
        iconElem = <Icon {...iconProps} />;
    }

    if (buttonText) {
        buttonTextElem = <Text style={[styles.textStyle, textStyle]}>{buttonText}</Text>;
    }

    return (
        <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
            {iconElem}
            {buttonTextElem}
        </TouchableOpacity>
    );
};

ButtonIcon.propTypes = {
    onPress: PropTypes.func.isRequired,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    buttonText: PropTypes.string,
    style: PropTypes.object
};

ButtonIcon.defaultProps = {
    iconName: 'rocket',
    iconSize: 30,
    iconColor: '#fff',
    style: {}
};

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        width: 40,
        height: 40,
        backgroundColor: '#000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        margin: 0
    },
    textStyle: {
        fontSize: 18,
        lineHeight: 36
    }
});

export { ButtonIcon };
