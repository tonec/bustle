import React, { PropTypes } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonIcon = (props) => {
  const { onPress, iconName, iconSize, iconColor, buttonText } = props

  const iconProps = {
    name: iconName,
    size: iconSize,
    color: iconColor,
    style: [styles.icon, props.style.icon]
  }

  let buttonTextElem
  let iconElem

  if (iconName) {
    iconElem = <Icon {...iconProps} />
  }

  if (buttonText) {
    buttonTextElem = (
      <Text style={[styles.text, props.style.text]}>
        {buttonText}
      </Text>
    )
  }

  return (
    <TouchableOpacity style={[styles.button, props.style.button]} onPress={onPress}>
      {iconElem}
      {buttonTextElem}
    </TouchableOpacity>
  )
}

ButtonIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  buttonText: PropTypes.string,
  style: PropTypes.object
}

ButtonIcon.defaultProps = {
  iconName: 'rocket',
  iconSize: 30,
  iconColor: '#fff',
  style: {}
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    margin: 0
  },
  text: {
    fontSize: 18,
    lineHeight: 36
  }
})

export { ButtonIcon }
