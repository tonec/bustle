import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { CardSection } from './common'

const SearchListItem = (props) => {
  return (
    <TouchableWithoutFeedback>
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
