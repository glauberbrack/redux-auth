
const initialState = {
    loadignSignInRequest: false,
    isAuthenticated: false,
}

export function auth(state = initialState, action: any) {
    switch (action.type) {
        case '@auth/SIGN_IN_REQUEST':
            return {
                ...state,
                loadignSignInRequest: true,
            }
    
        default:
            return state
    }
}