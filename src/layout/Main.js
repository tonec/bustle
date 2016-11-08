import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import SearchList from '../components/SearchList'

class Main extends Component {

  render () {
    return (
      <View style={style.container}>
        <SearchBar />
        <SearchList />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

export default Main
