import React from 'react';
import { connect } from 'react-redux';
import { IUsers, IUserDetailProps } from '../interfaces';

const UserDetails: React.FC<IUserDetailProps> = (props: IUserDetailProps) => {
    const user = props.full.find(user => user._id === props.match.params._id);
    return <div>{user?.name}</div>
}

const mapState = (state: IUsers) => ({
    users: state.full
})

const connector = connect(mapState, null)

export default connector(UserDetails);