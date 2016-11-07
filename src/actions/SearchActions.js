import {
    CURRENT_LOCATION_CHANGED
} from './types';

export const currentLocationChanged = (location) => {
    return {
        type: CURRENT_LOCATION_CHANGED,
        payload: location
    };
};
