import React, { PropTypes } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const Input = (props) => {
  const { labelText, value, onChangeText, placeholder, secureTextEntry } = props
  let label

  if (labelText) {
    label = (
      <Text style={[style.label, props.style.label]}>
        {labelText}
      </Text>
    )
  }

  return (
    <View style={[style.container, props.style.container]}>
      {label}
      <View style={[style.innerContainer, props.style.innerContainer]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          secureTextEntry={secureTextEntry}
          style={[style.input, props.style.input]}
        />
        {props.children}
      </View>
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object
}

Input.defaultProps = {
  style: {}
}

const style = StyleSheet.create({

  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20
  },

  innerContainer: {
    flexDirection: 'row'
  },

  label: {
    fontSize: 18,
    paddingLeft: 5,
    paddingBottom: 10
  },

  input: {
    flex: 1,
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  }
})

export { Input }
