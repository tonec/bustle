import React, { Component } from 'react'
import { ListView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as searchActions from '../actions/searchActions'
import SearchListItem from './SearchListItem'
import { Card } from './common'

class SearchList extends Component {

  constructor (props, context) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow
    })

    this.state = {
      dataSource: ds.cloneWithRows(this.props.locationList)
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.locationList !== this.props.locationList) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.locationList)
      })
    }
  }

  renderRow (rowData) {
    return <SearchListItem>{rowData}</SearchListItem>
  }

  render () {
    // console.log(this.props)
    return (
      <Card style={style.container}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </Card>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20
  }
})

const mapStateToProps = ({ search }) => {
  const { locationList } = search
  return { locationList }
}

export default connect(mapStateToProps, searchActions)(SearchList)
