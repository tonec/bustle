import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import * as searchActions from '../actions/searchActions'
import SearchListAnim from './SearchListAnim'
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

  render () {
    // console.log(this.state)
    return (
      <SearchListAnim>
        <Card>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <SearchListItem>{rowData}</SearchListItem>}
          />
        </Card>
      </SearchListAnim>
    )
  }
}

const mapStateToProps = ({ search }) => {
  const { locationList } = search
  return { locationList }
}

export default connect(mapStateToProps, searchActions)(SearchList)
