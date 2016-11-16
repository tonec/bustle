import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { CardSection } from './common'

const SearchListItem = (props) => {
  return (
    <TouchableWithoutFeedback
      onClick={(e) => console.log(e)}
    >
      <View>
        <CardSection>
          <Text>
            {props.children}
          </Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchListItem
