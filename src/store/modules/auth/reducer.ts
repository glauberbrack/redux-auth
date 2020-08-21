import { AuthState, AuthAction } from "./types"

const initialState: AuthState = {
    loadingSignInRequest: false,
    isAuthenticated: false,
    error: false
}

export default function auth(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case '@auth/SIGN_IN_REQUEST':
            return {
                ...state,
                loadingSignInRequest: true
            };
        case '@auth/SIGN_IN_SUCCESS':
            return {
                ...state,
                loadingSignInRequest: false,
                isAuthenticated: true
            };
        case '@auth/SIGN_IN_FAILURE':
            return {
                ...state,
                loadingSignInRequest: false,
                error: true
            };
    
        default:
            return state
    }
}