import { IAction } from "../../interfaces"
import { LOAD_USER, LOAD_FAIL, SEARCH_USER, SEARCH_QUERY } from "../../constants";

const initState = {
    full: [],
    searched: [],
    message: '',
    query: ''
}

const users = (state = initState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER:
            return { ...state, full: payload }
        case SEARCH_USER:
            return { ...state, searched: payload };
        case SEARCH_QUERY:
            return { ...state, query: payload }
        case LOAD_FAIL:
            return { ...state, message: 'It seems you are not connected to a Network' };
        default:
            return state;
    }
}

export default users;