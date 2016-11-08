import React, { PropTypes } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const Input = (props) => {
  const { labelText, value, onChangeText, placeholder, secureTextEntry } = props
  const { containerStyle, innerContainerStyle, labelStyle, inputStyle } = props.style
  let label

  if (labelText) {
    label = (
      <Text style={[styles.labelStyle, labelStyle]}>
        {labelText}
      </Text>
    )
  }

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {label}
      <View style={[styles.innerContainerStyle, innerContainerStyle]}>
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

const styles = StyleSheet.create({

  containerStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20
  },

  innerContainerStyle: {
    flexDirection: 'row'
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingBottom: 10
  },

  inputStyle: {
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
