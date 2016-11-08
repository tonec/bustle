import {
  CURRENT_LOCATION_CHANGED,
  LOCATION_TEXT_CHANGED,
  DESTINATION_TEXT_CHANGED,
  LOCATION_LIST_UPDATING,
  LOCATION_LIST_UPDATED
} from '../actions/types'

const INITIAL_STATE = {
  currentLocation: null,
  locationText: null,
  destinationText: null,
  locationListUpdating: false,
  locationList: [],
  destinationList: null
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)

  switch (action.type) {

    case CURRENT_LOCATION_CHANGED:
      return { ...state, currentLocation: action.payload }

    case LOCATION_TEXT_CHANGED:
      return { ...state, locationText: action.payload }

    case DESTINATION_TEXT_CHANGED:
      return { ...state, destinationText: action.payload }

    case LOCATION_LIST_UPDATING:
      return { ...state, locationListUpdating: true }

    case LOCATION_LIST_UPDATED:
      const locations = action.payload.predictions.map(item => item.description)
      return { ...state, locationListUpdating: false, locationList: locations }

    default:
      return state
  }
}
