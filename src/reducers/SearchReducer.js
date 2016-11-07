import {
    CURRENT_LOCATION_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    currentLocation: null,
    currentDestination: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CURRENT_LOCATION_CHANGED:
            return { ...state, currentLocation: action.payload };
        default:
            return state;
    }
};
