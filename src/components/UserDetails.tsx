import React from 'react';
import { connect } from 'react-redux';
import { IState, IUserDetailProps } from '../interfaces';

const UserDetails: React.FC<IUserDetailProps> = (props: IUserDetailProps) => {
    const user = props.users.find(user => user._id === props.match.params._id);
    return <div>{user?.name}</div>
}

const mapState = (state: IState) => ({
    users: state.users
})

const connector = connect(mapState, null)

export default connector(UserDetails);