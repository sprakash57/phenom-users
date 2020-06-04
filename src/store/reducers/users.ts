import { User, IAction } from "../../interfaces"
import { LOAD_USER, LOAD_FAIL } from "../../constants";

const initState: User[] = [];

const users = (state = initState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER:
            return [...state, ...payload];
        case LOAD_FAIL:
            return [...state, { message: 'Users not found' }]
        default:
            return state;
    }
}

export default users;