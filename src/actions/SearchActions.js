import Places from '../services/Places'

import {
  CURRENT_LOCATION_CHANGED,
  LOCATION_TEXT_CHANGED,
  DESTINATION_TEXT_CHANGED,
  LOCATION_LIST_UPDATING,
  LOCATION_LIST_UPDATED
} from './types'

export const currentLocationChanged = (location) => {
  return {
    type: CURRENT_LOCATION_CHANGED,
    payload: location
  }
}

export const locationTextChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: LOCATION_TEXT_CHANGED,
      payload: text
    })

    if (text.length > 2) {

      dispatch({
        type: LOCATION_LIST_UPDATING
      })

      Places.autocompletePlaceName(text).then(res => {
        dispatch({
          type: LOCATION_LIST_UPDATED,
          payload: res
        })
      }).catch(error => {
        Promise.reject(new Error(error))
      })
    }
  }
}

export const destinationTextChanged = (text) => {
  return {
    type: DESTINATION_TEXT_CHANGED,
    payload: text
  }
}
