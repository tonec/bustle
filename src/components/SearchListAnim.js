import React, { Component } from 'react'
import { View, Animated, StyleSheet, Dimensions } from 'react-native'

class SearchListAnim extends Component {

  constructor (props, context) {
    super(props, context)

    this.state = {
      pan: new Animated.ValueXY(),
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
  }

  componentDidMount () {
    Animated.timing(this.state.pan, {
       duration: 100,
       toValue: { x: 0, y: 100 }
    }).start()
  }

  render () {
      return (
        <View style={style.container}>
          <Animated.View style={[style.animatedview, {transform: this.state.pan.getTranslateTransform()}]}>
            {this.props.children}
          </Animated.View>
        </View>
      )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: 1,
    marginTop: -100
  },
  animatedview: {
    marginLeft: 20,
    marginRight: 20
  }
})

export default SearchListAnim
