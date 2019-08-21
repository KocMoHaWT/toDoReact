import {CHANGE_COLOR} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return Object.assign({}, state, {color: action.color});

        default:
            return state;
    }
}