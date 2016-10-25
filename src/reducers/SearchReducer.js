import {

} from '../actions/types';

const INITIAL_STATE = {
    current_location: null,
    current_destination: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        default:
            return state;
    }
};
