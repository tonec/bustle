import {
    CURRENT_LOCATION_CHANGED,
    LOCATION_TEXT_CHANGED,
    DESTINATION_TEXT_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    currentLocation: null,
    locationText: null,
    destinationText: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CURRENT_LOCATION_CHANGED:
            return { ...state, currentLocation: action.payload };
        case LOCATION_TEXT_CHANGED:
            return { ...state, locationText: action.payload };
        case DESTINATION_TEXT_CHANGED:
            return { ...state, destinationText: action.payload };
        default:
            return state;
    }
};
