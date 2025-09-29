// Hooks 
import { useAppDispatch, useAppSelector } from "./useStore"

// Reducers
import { changeToken } from "../store/token/tokenSlice"

function useToken() {
    const { token } = useAppSelector(state => state.token)
    const dispatch = useAppDispatch()

    const handleToken = () => {
        dispatch(changeToken())
    }

    return {
        // state 
        token,

        // Functions 
        handleToken
    }
}
export default useToken