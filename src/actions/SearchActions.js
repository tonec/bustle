import {
    CURRENT_LOCATION_CHANGED,
    LOCATION_TEXT_CHANGED,
    DESTINATION_TEXT_CHANGED
} from './types';

export const currentLocationChanged = (location) => {
    return {
        type: CURRENT_LOCATION_CHANGED,
        payload: location
    };
};

export const locationTextChanged = (text) => {
    return {
        type: LOCATION_TEXT_CHANGED,
        payload: text
    };
};

export const destinationTextChanged = (text) => {
    return {
        type: DESTINATION_TEXT_CHANGED,
        payload: text
    };
};
