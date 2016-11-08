import React, { PropTypes } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = (props) => {
  const { onPress, children } = props

  return (
    <TouchableOpacity style={[style.button, props.style.button]} onPress={onPress}>
      <Text style={[style.text, props.style.text]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
}

Button.defaultProps = {
  style: {}
}

const style = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export { Button }
