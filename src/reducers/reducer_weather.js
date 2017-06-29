import { FETCH_WEATHER } from '../actions/index';
// Never change state here
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_WEATHER: {
            // Here we're returning a new instance of state instead of modifying it
            return [action.payload.data, ...state]; // ... does not change the array
        };
        default: return state;
    };
};