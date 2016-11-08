import getPosition from '../services/getPosition'
import Places from '../services/Places'

import {
  CURRENT_LOCATION_UPDATING,
  CURRENT_LOCATION_UPDATED,
  LOCATION_TEXT_CHANGED,
  DESTINATION_TEXT_CHANGED,
  LOCATION_LIST_UPDATING,
  LOCATION_LIST_UPDATED
} from './types'

export const currentLocationUpdating = () => {
  return {
    type: CURRENT_LOCATION_UPDATING
  }
}

export const currentLocationUpdated = (location) => {
  return {
    type: CURRENT_LOCATION_UPDATED,
    payload: location
  }
}

export const getCurrentLocation = () => {
  return (dispatch) => {
    dispatch(currentLocationUpdating())
    getPosition((location) => {
      dispatch(currentLocationUpdated(location))
    })
  }
}

export const currentLocationChanged = (location) => {
  return {
    type: CURRENT_LOCATION_UPDATED,
    payload: location
  }
}

export const locationListUpdating = () => {
  return {
    type: LOCATION_LIST_UPDATING
  }
}

export const locationListUpdated = (res) => {
  return {
    type: LOCATION_LIST_UPDATED,
    payload: res
  }
}

export const locationTextChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: LOCATION_TEXT_CHANGED,
      payload: text
    })
    if (text.length > 2) {
      dispatch(locationListUpdating())
      Places.autocompletePlaceName(text).then(res => {
        dispatch(locationListUpdated(res))
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
