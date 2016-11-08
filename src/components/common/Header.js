import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  return (
      <View style={[styles.container, props.style.container]}>
          <Text style={[styles.headerText, props.style.headerText]}>
            {props.headerText}
          </Text>
      </View>
  )
}

Header.propTypes = {
  headerText: PropTypes.string,
  styles: PropTypes.object
}

Header.defaultProps = {
  style: {}
}

const styles = {
  container: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  headerText: {
    fontSize: 20
  }
}

export { Header }
