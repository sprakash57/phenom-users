interface Friend {
    id: number,
    name: string
}

export interface User {
    _id: string,
    index: number,
    guid: string,
    isActive: boolean,
    balance: string,
    picture: string,
    age: number,
    eyeColor: string,
    name: string,
    gender: string,
    company: string,
    email: string,
    phone: string,
    address: string,
    about: string,
    latitude: number,
    longitude: number,
    tags: string[],
    friends: Friend[],
    greeting: string,
    favoriteFruit: string
}

export interface IUsers {
    full: User[],
    searched: User[]
}

export interface IState {
    users: IUsers
}

export interface IAction { type: string, payload?: User[] }

export interface IUserDetailRoute {
    match: { params: { _id: string } }
}

export interface IUserDetailProps extends IUserDetailRoute, IUsers { }