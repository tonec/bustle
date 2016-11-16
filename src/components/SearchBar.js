import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as searchActions from '../actions/searchActions'
import { Input, ButtonIcon } from './common'

class SearchBar extends Component {

  handleClick () {
    this.props.getCurrentLocation()
  }

  handleLocationChange (text) {
    this.props.locationTextChanged(text, this.props.currentLocation, 100000)
  }

  handleDestinationChange (text) {
    this.props.destinationTextChanged(text)
  }

  render () {
    // console.log(this.props)
    return (
      <View style={style.container}>
        <KeyboardAvoidingView behavior='padding'>
          <Input
            labelText={''}
            placeholder={'Search location'}
            onChangeText={this.handleLocationChange.bind(this)}
            value={this.props.currentLocation}
          >
            <ButtonIcon
              iconName={'map-marker'}
              iconSize={26}
              iconColor={'#fff'}
              buttonText={''}
              onPress={this.handleClick.bind(this)}
              style={style}
            />
          </Input>
          <Input
              labelText={''}
              placeholder={'Search destination'}
              onChangeText={this.handleDestinationChange.bind(this)}
              value={this.props.currentDestination}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    zIndex: 10
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'red'
  }
})

const mapStateToProps = ({ search }) => {
  const { currentLocation, currentDestination } = search
  return { currentLocation, currentDestination }
}

export default connect(mapStateToProps, searchActions)(SearchBar)
