import { URL, LOAD_USER, LOAD_FAIL, SEARCH_USER, SEARCH_QUERY } from "../../constants"
import { User } from "../../interfaces";

export const loadUser = (): any => async (dispatch: any) => {
    try {
        const buffer = await fetch(URL);
        const data = await buffer.json();
        dispatch({ type: LOAD_USER, payload: data });
    } catch (error) {
        dispatch({ type: LOAD_FAIL });
    }
}

export const searchUser = (list: User[]): any => (dispatch: any) => {
    dispatch({ type: SEARCH_USER, payload: list })
}

export const searchQuery = (query: string): any => (dispatch: any) => {
    dispatch({ type: SEARCH_QUERY, payload: query })
}

