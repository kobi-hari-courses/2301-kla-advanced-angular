export const UsersFeatureKey = 'users';

export interface UsersState {
    readonly username: string;
    readonly password: string;
}

export const usersInitialState: UsersState = {
    username: 'johns',
    password: '123454321'
}