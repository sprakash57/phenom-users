import { URL, LOAD_USER, LOAD_FAIL } from "../../constants"

export const loadUser = (): any => async (dispatch: any) => {
    try {
        const response = await fetch(URL).then(data => data.json()).catch(err => console.log(err));
        dispatch({ type: LOAD_USER, payload: response });
    } catch (error) {
        dispatch({ type: LOAD_FAIL });
    }
}