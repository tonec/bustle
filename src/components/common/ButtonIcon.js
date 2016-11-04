import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonIcon = (props) => {
    const { onPress, iconName, iconSize, iconColor, buttonText, iconPosition } = props;
    const { buttonStyle, iconStyle, textStyle } = props.styles;

    console.log(props);

    const iconProps = {
        name: iconName,
        size: iconSize,
        color: iconColor,
        style: [styles.iconStyle, iconStyle]
    };

    let buttonTextElem;
    let iconElemLeft;
    let iconElemRight;

    if (buttonText) {
        buttonTextElem = <Text style={[styles.textStyle, textStyle]}>{buttonText}</Text>;
    }

    if (iconName && iconPosition === 'left') {
        iconElemLeft = <Icon {...iconProps} />;
    }

    if (iconName && iconPosition === 'right') {
        iconElemRight = <Icon {...iconProps} />;
    }

    return (
        <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
            {iconElemLeft}
            {buttonTextElem}
            {iconElemRight}
        </TouchableOpacity>
    );
};

ButtonIcon.propTypes = {
    onPress: PropTypes.func.isRequired,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    buttonText: PropTypes.string,
    styles: PropTypes.object
};

ButtonIcon.defaultProps = {
    iconName: 'rocket',
    iconSize: 30,
    iconColor: '#fff',
    iconPosition: 'left',
    styles: {}
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
