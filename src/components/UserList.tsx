import React, { useEffect, useState } from 'react';
import { User, IState } from '../interfaces';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const UserList: React.FC<IState> = (props: IState) => {

    const [usersList, setUsersList] = useState<User[]>([]);

    useEffect(() => {
        let renderList = props.users.full;
        if (props.users.searched && props.users.searched.length !== 0) {
            renderList = props.users.searched;
        }
        setUsersList(renderList);
    }, [props.users])

    if (usersList.length) {
        return (
            <>
                <SearchBar />
                <ul>
                    {usersList.map((user: User, i) => (
                        <li key={i}>
                            <p>{user.name}</p>
                            <p>{user.phone}</p>
                            <p>{user.email}</p>
                            <Link to={`/${user._id}`}>Know more</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
    return <div>Loading...</div>
}

const mapStateToProps = (state: IState) => ({ users: state.users })

export default connect(mapStateToProps, null)(UserList);