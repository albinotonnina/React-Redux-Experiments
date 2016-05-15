import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // returning always a new instance of state,
            // no mutating existing state, NEVER manipulate existing state
            //return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; //same
    }

    return state;
}

