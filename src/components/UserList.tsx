import React, { useEffect, useState } from 'react';
import { User, IState } from '../interfaces';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const UserList: React.FC<IState> = (props: IState) => {
    const [usersList, setUsersList] = useState<User[]>([]);
    const [noMatchAlert, setNoMatchAlert] = useState(false);

    useEffect(() => {
        let renderList = props.users.full;
        if (props.users.searched && props.users.searched.length !== 0) {
            renderList = props.users.searched;
            setNoMatchAlert(false);
        } else if (props.users.searched.length === 0 && props.users.query) {
            setNoMatchAlert(true);
        }
        setUsersList(renderList);
    }, [props.users]);

    return (
        <main className='container'>
            <section className='instructions'>
                <h1>Welcome to Phenom Users</h1>
                <h4>Below is the list of applicants. Select them to know more.</h4>
                <h5>Hard to find yourself? Just use the <em>Search Box</em></h5>
                <SearchBar />
                {noMatchAlert && <h6>No Matches Found. Showing default list</h6>}
            </section>
            {usersList.length
                ? (<ul className='user-list'>
                    {usersList.map((user: User, i) => (
                        <li key={i}>
                            <Link to={`/${user._id}`}>
                                <section className='gravatar'>
                                    <img src={`https://www.gravatar.com/avatar/${user.guid}`} alt="gravatar" />
                                </section>
                                <section>
                                    <h4>{user.name}</h4>
                                    <summary>{user.phone}</summary>
                                    <small>{user.email}</small>
                                </section>
                            </Link>
                        </li>
                    ))}
                </ul>)
                : props.users.message
                    ? <section className='loader'>{props.users.message}</section>
                    : <section className='loader'>Loading...</section>
            }
        </main>
    )
}

const mapStateToProps = (state: IState) => ({ users: state.users })

export default connect(mapStateToProps, null)(UserList);