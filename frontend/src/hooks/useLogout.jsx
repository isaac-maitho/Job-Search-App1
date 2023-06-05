import { useAuthContext } from './useAuthContext'

function useLogout() {
    const { dispatch } = useAuthContext()

    const logout = () =>{
        //remove user form storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
    }
  return { logout }
}

export default useLogout