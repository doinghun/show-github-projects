import _ from "lodash"
import {
    FETCH_PROJECT,
    FETCH_PROJECTS,
} from "../actions/types"

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_PROJECT:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_PROJECTS:
            return { ...state, ..._.mapKeys(action.payload, "id")}
        default:
            return state
    }
}