import React, { Component } from 'react'
import { Text, View, ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as searchActions from '../actions/searchActions'

class SearchList extends Component {

  constructor (props, context) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow
    })

    this.state = {
      dataSource: ds
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.locationList !== this.props.locationList) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.locationList)
      })
    }
  }

  render () {
    // console.log(this.props)
    return (
      <View style={style.container}>
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
  }
})

const mapStateToProps = ({ search }) => {
  const { locationList } = search
  return { locationList }
}

export default connect(mapStateToProps, searchActions)(SearchList)
