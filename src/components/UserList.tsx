import React from 'react';
import { User, IProps, IState } from '../interfaces';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UserList: React.FC<IProps> = (props: IProps) => {
    console.log(props);
    return (
        <ul>
            {props.users.map((user: User, i) => (
                <li key={i}>
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                    <Link to={`/${user._id}`}>Know more</Link>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state: IState) => ({
    users: state.users
})

export default connect(mapStateToProps, null)(UserList);