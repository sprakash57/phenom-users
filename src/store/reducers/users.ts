import { IAction } from "../../interfaces"
import { LOAD_USER, LOAD_FAIL, SEARCH_USER } from "../../constants";

const initState = {
    full: [],
    searched: []
}

const users = (state = initState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER:
            return { ...state, full: payload }
        case SEARCH_USER:
            return { ...state, searched: payload };
        case LOAD_FAIL:
            return { ...state, message: 'Users not found' };
        default:
            return state;
    }
}

export default users;