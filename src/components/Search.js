import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as SearchActions from '../actions/SearchActions'
import GetCurrentLocation from '../services/GetCurrentLocation'
import { Input, ButtonIcon } from './common'

class Search extends Component {

  constructor (props, context) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = { dataSource: ds.cloneWithRows(this.props.locationList) }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.locationList)
    })
  }

  handleClick () {
    GetCurrentLocation(location => {
      this.props.currentLocationChanged(location)
    })
  }

  handleLocationChange (text) {
    this.props.locationTextChanged(text)
  }

  handleDestinationChange (text) {
    this.props.destinationTextChanged(text)
  }

  render () {
    console.log(this.props)
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

        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'red'
  }
})

const mapStateToProps = ({ search }) => {
  const { currentLocation, currentDestination, locationList } = search
  return { currentLocation, currentDestination, locationList }
}

export default connect(mapStateToProps, SearchActions)(Search)
