export interface AuthState {
    readonly loadignSignInRequest: boolean,
    readonly isAuthenticated: boolean,
    readonly error: boolean;
    readonly token: string | null
}